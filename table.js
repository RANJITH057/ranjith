// Table Component
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { get } from 'lodash-es';


function getCellValue(id, row, column) {
	let value = '';
	if (column.getValue) {
		value = row.getValue(row, column, id) || '';
	} else {
		value = get(row, column.variable) || '';
	}

	return column.type, value;
}

const createColumn = (data) => { // eslint-disable-line
	return Object.assign({ // eslint-disable-line
		id: '',
		variable: '',
		title: '',
		width: 1,
		getValue: null,
		type: 'text',
		maxWidth: null,
		minWidth: null,
		renderFn: null,
	}, data);
};

function getObjectId(obj, index) {
	return obj.id || `${index}`;
}

const StyledHeaderCell = styled.div`
	width: ${(props) => props.width}%;
`;

const StyledCell = styled.div`
	width: ${(props) => props.width}%;
`;

const HeaderColumn = ({ column, t }) => { // eslint-disable-line
	const { width, title } = column; // eslint-disable-line
	return (
		<StyledHeaderCell className="tbl-hdr-cel" width={width}>
			{title}
		</StyledHeaderCell>
	);
};

const Header = ({ columns }) => { // eslint-disable-line
	return (
		<div className="tbl-hdr">
			{columns.map((column) => ( // eslint-disable-line
				<HeaderColumn
					key={column.id}
					column={column}
				/>
			))}
		</div>
	);
};

const Cell = ({ id, row, column }) => { // eslint-disable-line
	const { width } = column; // eslint-disable-line
	const value = getCellValue(id, row, column);

	return (
		<StyledCell className="tbl-cel" width={width}>
			<div className="tbl-cel-val">{value}</div>
		</StyledCell>
	);
};

const Row = ({ id, row, columns, onClick }) => { // eslint-disable-line

	function handleClick(ev) {
		if (ev) {
			ev.preventDefault();
		}

		if (onClick) {
			onClick(row, id);
		}
	}

	function handleKeyDown(ev) {
		if (ev.keyCode === 13 && onClick) {
			ev.preventDefault();
			onClick(row, id);
		}
	}

	return (
		<div
			role="link"
			tabIndex={0}
			className="tbl-row"
			onClick={handleClick}
			onKeyDown={handleKeyDown}
		>
			{columns.map((column) => ( // eslint-disable-line
				<Cell
					key={`${id}-${column.id}`}
					id={id}
					row={row}
					column={column}
					onClick={onClick}
				/>
			))}
		</div>
	);
};

// Main Component
const Table = (props) => {
	const {
		columns,
		rows,
		getRowId,
		onClickRow,
	} = props;

	const getIdFn = getRowId || getObjectId;

	return (
		<div className="tbl">
			<Header columns={columns} />
			<div className="tbl-cnt">
				{rows.map((row, index) => (
					<Row
						key={getIdFn(row, index)}
						id={getIdFn(row, '')}
						row={row}
						columns={columns}
						onClick={onClickRow}
					/>
				))}
			</div>
		</div>
	);
};


Table.propTypes = {
	columns: PropTypes.array,
	rows: PropTypes.array,
	variant: PropTypes.oneOf(['normal']),
	getRowId: PropTypes.func,
	onClickRow: PropTypes.func,
};

Table.defaultProps = {
	columns: [],
	rows: [],
	variant: 'normal',
	getRowId: null,
	onClickRow: null,
};

Table.createColumn = createColumn;

export default Table;

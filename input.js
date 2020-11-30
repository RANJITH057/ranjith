// Input Component
import React from 'react';
import PropTypes from 'prop-types';

// Main Component
const Input = (props) => {
	const {
		name,
        value,
        type,
		maxLength,
		isDisabled,
		placeholder,
		onChange,
		onFocus,
		onBlur,
	} = props;

	function handleOnChange() {
		if (onChange) {
			onChange(value);
		}
	}

	// const cls = {
	// 	inp: true,
	// 	'inp-inv': !isDisabled && isInvalid,
	// 	'inp-dis': isDisabled,
	// };

	// addToClass(cls, {
	// 	filter: 'inp-flt',
	// }, variant, 'normal');

	return (
		<input
			className="inp"
			name={name}
			type={type}
			placeholder={placeholder}
			maxLength={maxLength}
			disabled={isDisabled}
			onChange={handleOnChange}
			onFocus={onFocus}
			onBlur={onBlur}
		/>
	);
};

Input.propTypes = {
	variant: PropTypes.oneOf(['normal', 'filter']),
	name: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	maxLength: PropTypes.number,
	type: PropTypes.oneOf(['text', 'password', 'number', 'price']),
	validations: PropTypes.arrayOf(['email', 'number', 'price', 'website', 'phone', 'ipv4']),
	min: PropTypes.number,
	max: PropTypes.number,
	isInvalid: PropTypes.bool,
	isDisabled: PropTypes.bool,
	ariaLabel: PropTypes.string,
	ariaBy: PropTypes.string,
	placeholder: PropTypes.string,
	prefix: PropTypes.string,
	suffix: PropTypes.string,
	onChange: PropTypes.func,
	onFocus: PropTypes.func,
	onBlur: PropTypes.func,
	onKeyDown: PropTypes.func,
};

Input.defaultProps = {
	variant: 'normal',
	name: '',
	value: null,
	maxLength: null,
	type: 'text',
	validations: 'email',
	min: null,
	max: null,
	ariaLabel: '',
	ariaBy: '',
	isInvalid: false,
	isDisabled: false,
	placeholder: '',
	prefix: '',
	suffix: '',
	onChange: null,
	onFocus: null,
	onBlur: null,
	onKeyDown: null,
};

export default Input;

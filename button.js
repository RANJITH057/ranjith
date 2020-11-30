// Button Component
import React from 'react';
import PropTypes from 'prop-types';

// Main Component
const Button = (props) => {
	const {
		 size, isDisabled, isLoading, ariaLabel, onClick,
	} = props;

	function handleClick(ev) {
		if (ev) {
			ev.preventDefault();
			ev.stopPropagation();
		}

		if (!isDisabled && !isLoading && onClick) {
			onClick();
		}
	}

	return (
		<button
			className="btn"
			disabled={isDisabled}
			onClick={handleClick}
			ariaLabel={ariaLabel}
			ariaDisabled={isDisabled ? 'true' : 'false'}
		>
            Submit
		</button>
	);
};

Button.propTypes = {
	variant: PropTypes.oneOf(['normal', 'primary', 'secondary']),
	isDisabled: PropTypes.bool,
	isLoading: PropTypes.bool,
	ariaLabel: PropTypes.string,
	onClick: PropTypes.func,
};

Button.defaultProps = {
	variant: 'normal',
	label: '',
	isDisabled: false,
	isLoading: false,
	ariaLabel: '',
	onClick: null,
};

Button.displayName = 'Button';

export default Button;

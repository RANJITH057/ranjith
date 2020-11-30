// RegisterForm Component
import React from 'react';
import PropTypes from 'prop-types';
import Input  from './input';
import Button  from './button';

import './styles/registerForm.css';

// Main Component
const RegisterForm = () => {
	return (
		<div className='wrapper'>
			<text><i>User Name</i></text>
            <br />
			<Input placeholder='Enter your name' type="text"/>
			<br />
			<text><i>Password</i></text><br />
			<Input placeholder='Enter your password' type="password" />
			<br />
			<text><i>Email</i></text><br />
			<Input placeholder='Enter your email' type="text" />
			<br />
			<text><i>Mobile Number</i></text><br />
			<Input placeholder='Enter your phone number' type="phone" />
			<br />
			<Button type="submit" variant="primary">Submit</Button>
		</div>
	);
};

RegisterForm.propTypes = {
};

RegisterForm.defaultProps = {
};

export default RegisterForm;

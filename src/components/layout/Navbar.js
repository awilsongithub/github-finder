import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ title }) => {
	return (
		<nav className='bg-primary navbar'>
			<h1>
				<i className='fab fa-github p-1'></i>
				{title}
			</h1>

			<div>
				<Link to='/'>Home</Link>
				<Link to='/about'>About</Link>
			</div>
		</nav>
	);
};

Navbar.defaultProps = {
	title: "My Application",
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Navbar;

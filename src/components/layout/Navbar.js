import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ title }) => {
	return (
		<nav className='bg-primary'>
			<h1>
				<i className='fab fa-github'></i>
				{title}
			</h1>
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

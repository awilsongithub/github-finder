import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div className='container all-center my-2'>
			<h1>Page Not Found</h1>
			<Link to='/' className='btn'>
				Back to Home
			</Link>
		</div>
	);
};

export default NotFound;

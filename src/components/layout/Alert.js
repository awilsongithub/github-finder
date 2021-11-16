import React from "react";
import PropTypes from "prop-types";

const Alert = ({ alert }) => {
	if (alert) {
		return (
			<div className={`alert alert-${alert.type}`}>
				<i className='fas fa-info-circle'></i> {alert.message}
			</div>
		);
	} else {
		return null;
	}
};

Alert.propTypes = {
	alert: PropTypes.any
};

export default Alert;

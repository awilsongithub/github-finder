import React from "react";
import UserItem from "./UserItem";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";

const Users = ({ users, loading }) => {
	if (loading) {
		return <Spinner />;
	} else {
		return (
			<div>
				<div style={userGridStyles}>
					{users.map((user) => (
						<UserItem user={user} key={user.id} />
					))}
				</div>
			</div>
		);
	}
};

const userGridStyles = {
	display: "grid",
	gridGap: "1rem",
	gridTemplateColumns: "repeat(3, 1fr)",
};

Users.propTypes = {
	users: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired,
};

export default Users;

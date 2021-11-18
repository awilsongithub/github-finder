import React, { useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import GithubContext from "../../context/github/githubContext";

const Users = () => {
	const { loading, users } = useContext(GithubContext);

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

export default Users;

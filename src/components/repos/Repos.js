import React from "react";
import PropTypes from "prop-types";
import RepoItem from "./RepoItem";

function Repos({ repos }) {
	return (
		<div>
			<h3>Repositories</h3>
			{repos.map((repo) => (
				<RepoItem repo={repo} key={repo.id} />
			))}
		</div>
	);
}

Repos.propTypes = {
	repos: PropTypes.array.isRequired,
};

export default Repos;

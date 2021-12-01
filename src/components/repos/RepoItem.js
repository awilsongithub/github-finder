import React from "react";
import PropTypes from "prop-types";

function RepoItem({ repo }) {
	return (
		<div className='card'>
			<a href={repo.clone_url} target='_blank' rel='noreferrer'>
				{repo.name}
			</a>
		</div>
	);
}

RepoItem.propTypes = {
	repo: PropTypes.object.isRequired,
};

export default RepoItem;

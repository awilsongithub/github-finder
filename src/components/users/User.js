import React, { useEffect, Fragment, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";
import Repos from "../repos/Repos";
import GithubContext from "../../context/github/githubContext";

const User = () => {
	const params = useParams();
	const { user, loading, getUser } = useContext(GithubContext);

	useEffect(() => {
		getUser(params.username);
		// eslint-disable-next-line
	}, []);

	if (loading) {
		return <Spinner />;
	} else {
		console.log("INSIDE RENDER ELSE IN USER", user);

		const {
			name,
			avatar_url,
			location,
			bio,
			blog,
			login,
			html_url,
			followers,
			following,
			public_repos,
			repos,
			public_gists,
			hireable,
			company,
		} = user;

		return (
			<Fragment>
				<Link to='/' className='btn btn-light'>
					Back to Search
				</Link>
				Hireable:{"   "}
				{hireable ? (
					<i className='fas fa-check text-success'></i>
				) : (
					<i className='fas fa-times-circle text-danger'></i>
				)}
				<div className='card grid-2'>
					<div>
						<img
							src={avatar_url}
							alt=''
							style={{
								width: "200px",
								border: "1px solid lightgrey",
								borderRadius: "4px",
							}}
						/>
						<h1>{name}</h1>
						<p>Location: {location}</p>
					</div>
					<div>
						{bio && (
							<Fragment>
								<h3>Bio</h3>
								<p>{bio}</p>
							</Fragment>
						)}
						<a href={html_url}>Visit Github Profile</a>
						<ul>
							<li>
								{login && (
									<Fragment>
										<strong>Login: </strong> {login}
									</Fragment>
								)}
							</li>
							<li>
								{company && (
									<Fragment>
										<strong>Company: </strong> {company}
									</Fragment>
								)}
							</li>
							<li>
								{blog && (
									<Fragment>
										<strong>Website: </strong> {blog}
									</Fragment>
								)}
							</li>
						</ul>
					</div>
				</div>
				<div className='card'>
					<div className='badge badge-light'>
						Followers: {followers}
					</div>
					<div className='badge badge-light'>
						Following: {following}
					</div>{" "}
					<div className='badge badge-light'>
						Public Repos: {public_repos}
					</div>{" "}
					<div className='badge badge-light'>
						Public Gists: {public_gists}
					</div>
				</div>
				{/* needed since DOM loads before useEffect executes */}
				{repos ? <Repos repos={repos} /> : null}
			</Fragment>
		);
	}
};

export default User;

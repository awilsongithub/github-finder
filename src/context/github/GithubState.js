import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import { SEARCH_USERS, SET_LOADING, CLEAR_USERS, GET_USER } from "../types";

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== "production") {
	githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
	githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
	githubClientId = process.env.GITHUB_CLIENT_ID;
	githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = (props) => {
	const initialState = {
		users: [],
		user: {},
		loading: false,
	};

	const [state, dispatch] = useReducer(GithubReducer, initialState);

	const githubAuth =
		"client_id=" + githubClientId + "&client_secret=" + githubClientSecret;

	const searchUsers = async (text) => {
		setLoading();

		const res = await axios.get(
			`https://api.github.com/search/users?q=${text}&${githubAuth}`
		);
		dispatch({
			type: SEARCH_USERS,
			payload: res.data.items,
		});
	};

	const getUser = async (username) => {
		setLoading();
		const getUserPromise = axios.get(
			`https://api.github.com/users/${username}?${githubAuth}`
		);
		const getRepoPromise = axios.get(
			`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&${githubAuth}`
		);
		const responses = await Promise.all([getUserPromise, getRepoPromise]);
		const userData = responses[0].data;
		const repoData = responses[1].data;
		dispatch({
			type: GET_USER,
			payload: { ...userData, repos: repoData },
		});
	};

	const clearUsers = () => dispatch({ type: CLEAR_USERS });

	const setLoading = () => dispatch({ type: SET_LOADING });

	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				user: state.user,
				loading: state.loading,
				setLoading,
				searchUsers,
				clearUsers,
				getUser,
			}}
		>
			{props.children}
		</GithubContext.Provider>
	);
};

export default GithubState;

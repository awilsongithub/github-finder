import {
	SEARCH_USERS,
	SET_LOADING,
	CLEAR_USERS,
	GET_USER,
	SET_ALERT,
} from "../types";

const GithubReducer = (state, action) => {
	switch (action.type) {
		case SET_LOADING:
			return {
				...state,
				loading: true,
			};
		case SEARCH_USERS:
			return {
				...state,
				users: action.payload,
				loading: false,
			};
		case CLEAR_USERS:
			return {
				...state,
				users: [],
				loading: false,
			};
		case GET_USER:
			return {
				...state,
				user: action.payload,
				loading: false,
			};
		case SET_ALERT:
			return {
				...state,
				alert: action.payload,
			};
		default:
			return state;
	}
};

export default GithubReducer;

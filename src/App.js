import "./App.css";
import React, { Component, Fragment } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import axios from "axios";

class App extends Component {
	state = {
		searchText: "",
		users: [],
		user: {},
		loading: false,
		alert: null,
		api: {
			usersUrl: "https://api.github.com/users",
			oathString: this.getOauthString(),
		},
	};

	getOauthString() {
		const id = process.env.REACT_APP_GITHUB_CLIENT_ID;
		const secret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
		return `client_id=${id}&client_secret=${secret}`;
	}

	searchUsers = async (text) => {
		this.setState({ loading: true });

		const res = await axios.get(
			`https://api.github.com/search/users?q=${text}&{this.state.api.oathString}`
		);
		this.setState({
			users: res.data.items,
			loading: false,
		});
	};

	clearUsers = () => {
		this.setState({ users: [] });
	};

	getUser = async (username) => {
		this.setState({ loading: true });

		const res = await axios.get(
			`https://api.github.com/users/${username}?${this.state.api.oathString}`
		);
		console.log(res);
		this.setState({
			user: res.data,
			loading: false,
		});
	};

	setAlert = (message, type) => {
		this.setState({ alert: { message, type } });
		setTimeout(() => this.setState({ alert: null }), 5000);
	};

	render() {
		const { users, user, loading, alert } = this.state;

		const homeElement = (
			<Fragment>
				<Search
					searchUsers={this.searchUsers}
					clearUsers={this.clearUsers}
					showClearBtn={users.length > 0}
					setAlert={this.setAlert}
				/>
				<Users users={users} loading={loading} />
			</Fragment>
		);

		const userElement = (
			<User user={user} loading={loading} getUser={this.getUser} />
		);

		return (
			<Router>
				<div className='App'>
					<Navbar title='Github Finder' />
					<div className='container'>
						<Alert alert={alert} />

						<Routes>
							<Route path='/' element={homeElement} />
							<Route
								path='users/:username'
								element={userElement}
							/>
							<Route path='/about' element={<About />} />
						</Routes>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;

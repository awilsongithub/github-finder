import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/Search";
import axios from "axios";

class App extends Component {
	state = {
		searchText: "",
		allUsers: [],
		displayedUsers: [],
		loading: false,
	};

	async componentDidMount() {
		this.setState({ loading: true });
		const res = await axios.get("https://api.github.com/users");

		this.setState({
			allUsers: res.data,
			displayedUsers: res.data,
			loading: false,
		});
	}

	onSearchTextChange = (text) => {
		let filtered = this.state.allUsers.filter((user) => {
			return user.login.includes(text);
		});
		this.setState({
			displayedUsers: filtered,
		});
	};

	render() {
		console.log("LOGGING THIS FROM APP.JS RENDER", this);
		return (
			<div className='App'>
				<Navbar title='Github Finder' />
				<div className='container'>
					<Search onSearchTextChange={this.onSearchTextChange} />
					<Users
						users={this.state.displayedUsers}
						loading={this.state.loading}
					/>
				</div>
			</div>
		);
	}
}

export default App;

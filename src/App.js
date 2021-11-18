import "./App.css";
import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import GithubState from "./context/github/GithubState";

const App = () => {
	const [alert, setAlert] = useState(null);

	const showAlert = (message, type) => {
		setAlert({ message, type });
		setTimeout(() => setAlert(null), 5000);
	};

	return (
		<GithubState>
			<Router>
				<div className='App'>
					<Navbar title='Github Finder' />
					<div className='container'>
						<Alert alert={alert} />

						<Routes>
							<Route
								path='/'
								element={
									<Fragment>
										<Search showAlert={showAlert} />
										<Users />
									</Fragment>
								}
							/>
							<Route path='users/:username' element={<User />} />
							<Route path='/about' element={<About />} />
						</Routes>
					</div>
				</div>
			</Router>
		</GithubState>
	);
};

export default App;

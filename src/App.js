import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import User from "./components/users/User";
import Alert from "./components/layout/Alert";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import NotFound from "./components/pages/NotFound";

const App = () => {
	return (
		<AlertState>
			<GithubState>
				<Router>
					<div className='App'>
						<Navbar title='Github Finder' />
						<div className='container'>
							<Alert />
							<Routes>
								<Route path='/' element={<Home />} />
								<Route
									path='users/:username'
									element={<User />}
								/>
								<Route path='/about' element={<About />} />
								<Route
									path='*'
									exact={true}
									element={<NotFound />}
								/>
							</Routes>
						</div>
					</div>
				</Router>
			</GithubState>
		</AlertState>
	);
};

export default App;

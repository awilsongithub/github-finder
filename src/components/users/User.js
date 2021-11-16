import React, { Component } from "react";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";
import { useParams } from "react-router-dom";

class User extends Component {
	static propTypes = {
		user: PropTypes.object.isRequired,
		loading: PropTypes.bool.isRequired,
		getUser: PropTypes.func.isRequired,
	};

	componentDidMount() {
		this.props.getUser(this.props.params.username);
	}

	render() {
		if (this.props.loading) {
			return <Spinner />;
		} else {
			console.log(this.props);
			const { user } = this.props;

			return (
				<div className='card'>
					<img
						src={user.avatar_url}
						alt=''
						style={{ width: "200px", border: '1px solid lightgrey', borderRadius: '4px' }}
					/>
					<h1>{user.login}</h1>
					<p>Public Repos: {user.public_repos}</p>
				</div>
			);
		}
	}
}

/**
 * returns higher order component that passes
 * params to child
 */
function withRouterCustom(Child) {
	return (props) => {
		let params = useParams();
		return <Child {...props} params={params} />;
	};
}

export default withRouterCustom(User);

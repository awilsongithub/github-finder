import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Search extends Component {

	constructor(props) {
		super(props);
		// this.state = { searchText: ""}
		this.handleChange = this.handleChange.bind(this);

	}
	static propTypes = {
		onSearchTextChange: PropTypes.func.isRequired
	};

	handleChange(e) {
		this.props.onSearchTextChange(e.target.value);
	}

	render() {
		return (
			<div>
				<input
					type='text'
					onChange={this.handleChange}
					placeholder="Filter users...."
				/>
			</div>
		);
	}
}

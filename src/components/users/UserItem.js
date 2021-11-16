import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ user }) => {
	const link = `/users/${user.login}`;

	return (
		<Link to={link}>
			<div className='card text-center'>
				<img
					src={user.avatar_url}
					alt=''
					className='round-img'
					style={{ width: "60px" }}
				/>
				<h3>{user.login}</h3>
				<div>
					<a
						href={user.html_url}
						className='btn btn-dark bnt-sm my-1'
					>
						More
					</a>
				</div>
			</div>
		</Link>
	);
};

UserItem.propTypes = {
	user: PropTypes.object.isRequired,
};

export default UserItem;

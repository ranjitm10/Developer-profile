import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

function AddDev(props) {
	return props.obj.map((item) => {
		return (
			<div className="avatar-component" key={item.login}>
				<img className="avatarPicture" src={item.avatar_url} alt="avatar"></img>
				<Link to={`/developers/${item.login}`} className="avatarLink">
					{item.login}
				</Link>
			</div>
		);
	});
}
export default AddDev;

import React from "react";
import arrow from "../static/arrow.png";
import "../index.css";

function ReposBody(props) {
	const Month = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	return props.obj.map((item) => {
		return (
			<div className="repos-component">
				<a href={item.html_url} className="repo-name">
					{item.name}
					<img src={arrow} alt="vector" className="logo"></img>
				</a>
				<span className="date">
					Updated on{" "}
					{new Date(item.updated_at).getDate() +
						" " +
						Month[new Date(item.updated_at).getMonth()] +
						" " +
						new Date(item.updated_at).getFullYear()}
				</span>
				<br></br>
				{item.description}
				<br></br>
				<hr className="divider"></hr>
			</div>
		);
	});
}

export default ReposBody;

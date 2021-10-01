import React, {useState, useEffect} from "react";
import ReposBody from "./ReposBody";
import heart from "../static/heart.png";
import "../index.css";

function Repos(props) {
	const [developerId, setDeveloperId] = useState(props.developerId);
	const [repositories, setRepositories] = useState([]);

	useEffect(() => {
		fetchAllRepos();
	}, []);

	function fetchAllRepos() {
		fetch(`https://api.github.com/users/${developerId}/repos`)
			.then((response) => response.json())
			.then((data) => {
				setRepositories(data);
			});
	}

	return (
		<div className="repos">
			<div className="repos-data">
				<h1 className="repos-heading">Github repositories</h1>
				<hr className="divider"></hr>
				<ReposBody obj={repositories} />
			</div>
			<div className="repo-footer">
				<h2 className="footer-text">
				Made by Ranjit <img src={heart} alt="heart"></img>
				</h2>
			</div>
		</div>
	);
}

export default Repos;

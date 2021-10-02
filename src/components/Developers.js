import React, { useEffect, useState } from "react";
import searchVector from "../static/Vector.png";
import "../index.css";
import AddDev from "./AddDev";

function Developers(props) {
	const [developersInfo, setDevelopersInfo] = useState([]);

	function fetchAllDevelopers() {
		fetch("https://backend.ranjitm10.repl.co/developers")
			.then((response) => response.json())
			.then((data) => {
				let prev = developersInfo;
				prev = [];
				for (const key in data) {
					prev.push(data[key]);
				}
				setDevelopersInfo(prev);
			});
	}
	useEffect(() => {
		fetchAllDevelopers();
	}, []);

	function handleChange(event) {
		if (String(event.target.value) === "") {
			fetchAllDevelopers();
		} else {
			fetch("https://backend.ranjitm10.repl.co/developers")
				.then((response) => response.json())
				.then((data) => {
					let prev = [];
					const input = event.target.value;
					for (const key in data) {
						if (
							String(data[key].login)
								.toLowerCase()
								.includes(String(input).toLowerCase())
						) {
							prev.push(data[key]);
						}
					}
					setDevelopersInfo(prev);
				});
		}
	}

	return (
		<div>
			<div className="heading">Explore developers profiles</div>
			<hr className="divider"></hr>
			<div className="search2">
				<input
					type="text"
					placeholder="Search for username"
					className="search"
					onInput={handleChange}
				></input>
				<img src={searchVector} alt="vector" className="vector"></img>
			</div>
			<div className="profile-container">
				<AddDev obj={developersInfo} />
			</div>
		</div>
	);
}

export default Developers;

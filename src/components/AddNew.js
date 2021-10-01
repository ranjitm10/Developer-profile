import React, { useState } from "react";
import "../index.css";
import githubLogo from "../static/githublogo.png";
import codechef from "../static/codechef.png";
import Hackerrank from "../static/Hackerrank.png";
import linkedin from "../static/linkedinlogo.png";
import medium from "../static/Medium.png";
import twitter from "../static/twitter.png";

function AddNew(props) {
	const showModal = props.show;
	const [data, setData] = useState({
		Github: "",
		Linkedin: "",
		Codechef: "",
		Hackerrank: "",
		Twitter: "",
		Medium: "",
		show: showModal,
	});

	const addnewUser = () => {
		const id = data;
		if (id) {
			const request = new Request("/api/developers", {
				method: "POST",
				headers: new Headers({
					"Content-Type": "application/json",
				}),
				body: JSON.stringify(data),
			});
			fetch(request)
				.then((response) => response.json())
				.then(() => {
					alert("User has been succesfully added!");
					window.location.reload(false);
				});
		}
	};
	const handleSubmit = (event) => {
		if (data.Github) {
			addnewUser();
		} else {
			alert("Github ID is required to proceed! ");
		}
		props.onCancel();
		event.preventDefault();
	};

	const handleChange = (event, id) => {
		switch (id) {
			case "Github":
				setData({ Github: event.target.value });
				break;
			case "Linkedin":
				setData({ Linkedin: event.target.value });
				break;
			case "Codechef":
				setData({ Codechef: event.target.value });
				break;
			case "Hackerrank":
				setData({ Hackerrank: event.target.value });
				break;
			case "Twitter":
				setData({ Twitter: event.target.value });
				break;
			case "Medium":
				setData({ Medium: event.target.value });
				break;
			default:
		}
	};

	return (
		<div className="modal">
			<div className="inner-modal">
				<div className="modal-header">Add Developer Profile</div>
				<br></br>
				<div className="modal-body">
					<hr className="divider" />
					<form className="form" onSubmit={handleSubmit}>
						<label>
							<span className="fields-info">
								<img src={githubLogo} alt="github logo" />
								Github
							</span>
							<br />
							<input
								type="text"
								className="id-input"
								onInput={(event) => handleChange(event, "Github")}
							/>
							<br />
						</label>
						<label>
							<span className="fields-info">
								<img src={linkedin} alt="Linkedin logo" />
								Linkedin
							</span>
							<br />
							<input
								type="text"
								className="id-input"
								onInput={(event) => handleChange(event, "Linkedin")}
							/>
							<br />
						</label>
						<label>
							<span className="fields-info">
								<img src={codechef} alt="codechef logo" />
								Codechef
							</span>
							<br />
							<input
								type="text"
								className="id-input"
								onInput={(event) => handleChange(event, "Codechef")}
							/>
							<br />
						</label>
						<label>
							<span className="fields-info">
								<img src={Hackerrank} alt="Hackerrank logo" />
								Hackerrank
							</span>
							<br />
							<input
								type="text"
								className="id-input"
								onInput={(event) => handleChange(event, "Hackerrank")}
							/>
							<br />
						</label>
						<label>
							<span className="fields-info">
								<img src={twitter} alt="twitter logo" />
								Twitter
							</span>
							<br />
							<input
								type="text"
								className="id-input"
								onInput={(event) => handleChange(event, "Twitter")}
							/>
							<br />
						</label>
						<label>
							<span className="fields-info">
								<img src={medium} alt="medium logo" />
								Medium
							</span>
							<br />
							<input
								type="text"
								className="id-input"
								onInput={(event) => handleChange(event, "Medium")}
							/>
							<br />
						</label>
						<br />
						<hr className="divider2" />
						<div className="modal-footer">
							<input
								type="button"
								value="Cancel"
								className="cancel-button"
								onClick={props.onCancel}
							/>
							<input type="submit" className="submit-button" value="Submit" />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default AddNew;

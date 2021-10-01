import React, { useState } from "react";
import "../index.css";
import AddNew from "./AddNew";
import heart from "../static/heart.png";

function HomeFooter(props) {
	const [popupInfo, setPopUpInfo] = useState("");
	const [show, setShow] = useState(false);

	const addNewDeveloper = () => {
		setShow(true);
	};

	function handleClosemodal(event) {
		console.log(event);
		setShow(false);
	}

	return (
		<div>
			<hr className="divider"></hr>
			<div className="footer-text">
				Could not find what you were looking for?
			</div>
			<div className="popup">{popupInfo}</div>
			<div className="footer-message">
				Could not find what you were looking for?
			</div>
			<div className="button">
				<button className="add-new-developer-button" onClick={addNewDeveloper}>
					Add developer Info
				</button>
			</div>
			{show && <AddNew show={show} onCancel={handleClosemodal} />}
			<div className="repo-footer">
				<h2 className="footer-text">
					Made by Ranjit <img src={heart} alt="heart"></img>
				</h2>
			</div>
		</div>
	);
}

export default HomeFooter;

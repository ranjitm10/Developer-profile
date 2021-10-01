import "../index.css";
import headerImage from "../static/headerImg.jpg";

function HomeHeader() {
	return (
		<div className="header">
			<div className="header-text">Developer</div>
			<div className="header-image">
				<img src={headerImage} alt="headerimage"></img>
			</div>
		</div>
	);
}

export default HomeHeader;

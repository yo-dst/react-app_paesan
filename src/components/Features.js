import { Row, Col } from "react-bootstrap";

import "../styles/Features.scss";
import Title from "./Title";

const features = [
	{
		name: "Dedicated Instance",
		img: "https://picsum.photos/500/400",
		link: "/#"
	},
	{
		name: "Hosting Communities",
		img: "https://picsum.photos/500/400",
		link: "/#"
	},
	{
		name: "Petitioning, Subpoena, legal",
		img: "https://picsum.photos/500/400",
		link: "/#"
	},
	{
		name: "Mass (e)mailing",
		img: "https://picsum.photos/500/400",
		link: "/#"
	},
	{
		name: "Media campaign automation",
		img: "https://picsum.photos/500/400",
		link: "/#"
	},
	{
		name: "Event Organization",
		img: "https://picsum.photos/500/400",
		link: "/#"
	},
	{
		name: "Viral Networking",
		img: "https://picsum.photos/500/400",
		link: "/#"
	},
	{
		name: "Microblogging & Podcasting",
		img: "https://picsum.photos/500/400",
		link: "/#"
	},
];

const Features = () => {
	return (
		<Row className="features-container">
			<Col>
				<Title title="FEATURES" color="#fff" >
					<div className="features-upgrade">
						<div>Upgrade for NPO plan today</div>
						<div className="features-upgrade-underline"></div>
					</div>
				</Title>
				<Row className="centered-content features">
					{features.map(item => (
						<Col xs={12} sm={6} lg={3} className="features-item-container" key={item.name}>
							<div className="features-item">
								<img src={item.img} alt="unkown" className="features-item-img" />
								<div className="features-item-title">{item.name}</div>
							</div>
						</Col>
					))}
				</Row>
			</Col>
		</Row>
	);
}

export default Features;
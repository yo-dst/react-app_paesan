import { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import "../styles/SignalRiskScreen.scss";
import Navbar from "./Navbar";

const issuesContent = [
	{
		name: "Human Rights",
		img: "https://picsum.photos/600"
	},
	{
		name: "Health",
		img: "https://picsum.photos/600"
	},
	{
		name: "Education",
		img: "https://picsum.photos/600"
	},
	{
		name: "Environment",
		img: "https://picsum.photos/600"
	},
	{
		name: "Self Sovereignty",
		img: "https://picsum.photos/600"
	},
	{
		name: "Economy",
		img: "https://picsum.photos/600"
	},
	{
		name: "Politics",
		img: "https://picsum.photos/600"
	},
	{
		name: "Technology",
		img: "https://picsum.photos/600"
	}
];

const Title = ({ title, subtitle }) => {
	return (
		<div className="petition-title-block">
			<div className="petition-title-block-title">
				{title}
			</div>
			<div className="petition-title-block-subtitle">
				{subtitle}
			</div>
		</div>
	);
}

const	SignalRiskScreen = () => {
	const [issueSelected, setIssueSelected] = useState(null);

	return (
		<Container fluid>
			<Navbar />
			<Row className="petition">
				<Col>
					<Title 
						title="What Kind Of Issue You Want To Solve?"
						subtitle="Selecting a topic allows change.org to recommend you position to interested supporters"
					/>
					<Row className="justify-content-start bg-primary">
						{issuesContent.map((item, index) => (
							<Col md={3} className={`petition-issue-container ${index === issueSelected ? "petition-issue-container-active" : null}`} key={`petition-issue-${index}`}>
								<Card className="petition-issue">
									<Card.Img variant="top" src={item.img} style={{borderRadius: "50%"}} />
									<Card.Body>
										<Card.Title className="petition-issue-title">{item.name}</Card.Title>
									</Card.Body>
								</Card>
							</Col>
						))}
					</Row>
				</Col>
			</Row>
		</Container>
	);
}

export default SignalRiskScreen;
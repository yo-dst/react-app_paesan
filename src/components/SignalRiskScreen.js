import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Container, Row, Col, Card, Form, Button, InputGroup } from "react-bootstrap";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";

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

const PetitionTitle = ({ title, subtitle }) => {
	return (
		<div className="petition-title-wrapper">
			<div className="petition-title-wrapper-title">
				{title}
			</div>
			<div className="petition-title-wrapper-subtitle">
				{subtitle}
			</div>
		</div>
	);
}

const FilesInput = () => {
	const [files, setFiles] = useState([]);
	
	return (
		<div>
			<label className="custom-file-upload">
				<input type="file" multiple onChange={e => {var filesArr = Array.prototype.slice.call(e.target.files); console.log(filesArr)}} />
				<i className="fa fa-cloud-upload" /> Attach
			</label>
			{files}
		</div>
	  );
}

const SignalRiskScreen = () => {
	const [data, setData] = useState({
		issueSelected: null,
		keywords: "",
		goal: "",
		target: ""
	});

	return (
		<Container fluid>
			<Navbar />
			<Row className="petition">
				<Col>
					<PetitionTitle 
						title="What Kind Of Issue You Want To Solve?"
						subtitle="Selecting a topic allows change.org to recommend you position to interested supporters"
					/>
					<Row className="justify-content-start mt-3">
						{issuesContent.map((item, index) => (
							<Col 
								md={3}
								className={`petition-issue-container ${index ===data.issueSelected ? "petition-issue-container-active" : null}`} 
								key={`petition-issue-${index}`}
								onClick={e => setData({ ...data, issueSelected: index })}
							>
								<Card className="petition-issue">
									<Card.Img variant="top" src={item.img} style={{borderRadius: "50%"}} />
									<Card.Body className="p-0">
										<Card.Title className="petition-issue-title">{item.name}</Card.Title>
									</Card.Body>
								</Card>
							</Col>
						))}
					</Row>
					<Row className="justify-content-center mt-3">
						<Col md={8}>
							<Form.Control
								className="petition-keywords"
								type="text"
								value={data.keywords}
								onChange={e => setData({ ...data, keywords: e.target.value })}
								placeholder="Search by keywords: #Free Speech, democracy"
							/>
						</Col>
					</Row>
					<Row className="justify-content-center mt-3">
						<Col>
							<PetitionTitle
								title="Write Your Risk Title"
								subtitle="this is the first thing people will see about your risk. Get their attention with short title that focus on the change you'd like them to support"
							/>
							<InputGroup className="mb-3">
								<Form.Control
									className="petition-goal"
									type="text"
									value={data.goal}
									onChange={e => setData({ ...data, goal: e.target.value })}
									placeholder="What do you whant to achieve?"
								/>
								<InputGroup.Text style={{background: "transparent"}}>
									<FontAwesomeIcon icon={faQuestionCircle} style={{fontSize: "1.2rem"}} />
								</InputGroup.Text>
							</InputGroup>
						</Col>
					</Row>
					<Row className="justify-content-center mt-3">
						<Col>
							<PetitionTitle
								title="Great! Who Has The Power To Make This Change?"
								subtitle="Choose the recipient(s) of your petition. These are people or organisations with the power to solve your problem or take the action you’re demanding."
							/>
							<InputGroup className="mb-3">
								<Form.Control
									className="petition-target"
									type="text"
									value={data.target}
									onChange={e => setData({ ...data, target: e.target.value })}
									placeholder="Petition target (e.g mayor)"
								/>
								<InputGroup.Text style={{background: "transparent"}}>
									<FontAwesomeIcon icon={faQuestionCircle} style={{fontSize: "1.2rem"}} />
								</InputGroup.Text>
							</InputGroup>
						</Col>
					</Row>
					<Row className="justify-content-center mt-3">
						<Col>
							<PetitionTitle
								title="Add A Photo Or Video"
								subtitle="Petitions with a photo or video receive six times more signatures than those without. Include one that captures the emotion of your story."
							/>
							<FilesInput />
						</Col>
					</Row>
					<button onClick={e => console.log(data)} >Submit</button>
				</Col>
			</Row>
		</Container>
	);
}

export default SignalRiskScreen;
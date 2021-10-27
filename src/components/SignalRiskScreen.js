import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Container, Row, Col, Card, Form, InputGroup, OverlayTrigger } from "react-bootstrap";
import { faInfoCircle, faSearch } from "@fortawesome/free-solid-svg-icons";


import "../styles/Petition.scss";
import Navbar from "./Navbar";
import InYourArea from "./InYourArea";
import SuccessStories from "./SuccessStories";
import Features from "./Features";
import KeyChangeMakers from "./KeyChangeMakers";
import CluePopover from "./CluePopover";
import PetitionInput from "./PetitionInput";
import CkEditorComponent from "./CkEditorComponent";

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

const titleClues = [
	{
		clue: "Keep it short to the point",
		details: 'Example “Buy organic, free-range eggs for your restaurants” Not: “Stop the inhumane treatment of chickens inbattery farms that are forced…”'
	},
	{
		clue: "Focus on the solution",
		details: "Example: “Raise theminimum wage in manchester to $15 an hour”. Not: “Stop rising inequality in Manchester”"
	},
	{
		clue: "Communicate urgency",
		details: "Example:“Approuve life-saving medication for my daughter’s before it’s too late”;"
	},
];

const targetClues = [
	{
		clue: "Many petitions have companies or businesses as targets",
		details: 'Examples: “Microsoft” or “Divya’s Beauty Salon”. Feel free to also list the CEO or another company official.'
	},
	{
		clue: "Politicians, legislatures, or government agencies are also common",
		details: "Examples: “Mumbai City Council”, your Sabha representative’s name, or the Ministry of Health and Family Welfare"
	},
	{
		clue: "Don’t overthink it",
		details: "You can add or change targets later. For now, just make your best guess and write the rest of your petition!"
	},
];

/*
const descriptionClues = [
	{
		clue: "Describe the people involved and the problem they are facing",
		details: 'Readers are most likely to take action when they understand who is affected. '
	},
	{
		clue: "Describe the solution",
		details: "Explain what needs to happen and who can make the change. Make it clear what happens if you win or lose."
	},
	{
		clue: "Make it personal",
		details: "Readers are more likely to sign and support your petition if it’s clear why you care."
	},
	{
		clue: "Respect others",
		details: "Don't bully, use hate speech, threaten violence or make things up."
	}
];
*/

const mediaClues = [
	{
		clue: "Choose a photo that captures the emotion of your petition",
		details: 'Photos of people or animals work well.'
	},
	{
		clue: "Try to upload photos that are 1600 x 900 pixels or larger",
		details: "Large photos look good on all screen sizes."
	},
	{
		clue: "Keep it friendly for all audiences",
		details: "Make sure your photo doesn't include graphic violence or sexual content."
	},
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

const FilesInput = ({ data, setData }) => {
	const [urls, setUrls] = useState("");
	
	const onChange = (e) => {
		let filesArr = Array.prototype.slice.call(e.target.files);
		setData({ ...data, files: filesArr });
	}

	return (
		<div className="files-input">
			<OverlayTrigger trigger={["hover", "trigger"]} placement="bottom-end" overlay={CluePopover(mediaClues)} delay={0}>
				<InputGroup.Text className="petition-media-clue">
					<FontAwesomeIcon icon={faInfoCircle} style={{fontSize: "1.2rem"}} />
				</InputGroup.Text>
			</OverlayTrigger>
			<label className="custom-file-upload">
				<input type="file" multiple onChange={onChange} />
				Choose a file
			</label>
			<div className="files-input-border"></div>
			<PetitionInput
				placeholder="http://"
				clues={mediaClues}
				btnTxt="Add"
				data={urls}
				setData={e => setUrls(e.target.value)}
			/>
			{data.files.map(file => (
				<div>{file.name}</div>
			))}
		</div>
	);
}

const SignalRiskScreen = () => {
	const [data, setData] = useState({
		issueSelected: null,
		keywords: "",
		title: "",
		target: "",
		description: [
			{
				type: "paragraph",
				children: [{ text: "A line of text in a paragraph."}]
			}
		],
		files: [],
		urls: [],
		keywordsMedia: ""
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
					<Row className="justify-content-center mt-4 mb-5">
						<Col md={8}>
							<InputGroup>
								<Form.Control
									className="petition-keywords"
									type="text"
									value={data.keywords}
									onChange={e => setData({ ...data, keywords: e.target.value })}
									placeholder="Search by keywords: #Free Speech, democracy"
								/>
								<InputGroup.Text className="petition-input-clue">
									<FontAwesomeIcon icon={faSearch} style={{fontSize: "1.2rem"}} />
								</InputGroup.Text>
							</InputGroup>
						</Col>
					</Row>
					<Row className="justify-content-center petition-form-block">
						<Col>
							<PetitionTitle
								title="Write Your Risk Title"
								subtitle="this is the first thing people will see about your risk. Get their attention with short title that focus on the change you'd like them to support"
							/>
							<PetitionInput
								placeholder="What do you whant to achieve?"
								clues={titleClues}
								data={data.title}
								setData={e => setData({ ...data, title: e.target.value})}
								btnTxt="Continue"
								showClues={true}
							/>
						</Col>
					</Row>
					<Row className="justify-content-center petition-form-block">
						<Col>
							<PetitionTitle
								title="Great! Who Has The Power To Make This Change?"
								subtitle="Choose the recipient(s) of your petition. These are people or organisations with the power to solve your problem or take the action you’re demanding."
							/>
							<PetitionInput
								placeholder="Petition target (e.g mayor)"
								clues={targetClues}
								data={data.target}
								setData={e => setData({ ...data, target: e.target.value})}
								btnTxt="Continue"
								showClues={true}
							/>
						</Col>
					</Row>
					<Row className="justify-content-center petition-form-block">
						<Col>
							<PetitionTitle
								title="Describe the problem you want to solve"
								subtitle="People are more likely to support your cause if it’s clear why you care. explain how this change will impact you, your family or you community."
							/>
							<CkEditorComponent />
							<Row className="mt-3">
								<Col className="richtext-bottom-txt">
									The most successful causes tend to be atleast 3 paragraphs long(about 1000 characters in length).
								</Col>
								<Col xs="auto" style={{marginLeft: "1rem"}}>
									<button className="petition-input-btn">Continue</button>
								</Col>
							</Row>
						</Col>
					</Row>
					<Row className="justify-content-center petition-form-block">
						<Col>
							<PetitionTitle
								title="Add A Photo Or Video"
								subtitle="Petitions with a photo or video receive six times more signatures than those without. Include one that captures the emotion of your story."
							/>
							<FilesInput data={data} setData={setData}/>
						</Col>
					</Row>
					<Row className="justify-content-center mt-4">
						<Col>
							<PetitionInput
								placeholder="Add keywords: #Free speech, democracy, #sovreignty"
								clues={targetClues}
								data={data.keywordsMedia}
								setData={e => setData({ ...data, keywordsMedia: e.target.value})}
								btnTxt="Add"
								btnClass="petition-keywords-media-btn"
							/>
						</Col>
					</Row>
					<Row className="justify-content-center petition-form-block">
						<Col>
							<button className="petition-save-preview-btn">Save and Preview</button>
						</Col>
					</Row>
				</Col>
			</Row>
			<InYourArea />
			<SuccessStories />
			<Features />
			<KeyChangeMakers />
		</Container>
	);
}

export default SignalRiskScreen;
import { Row, Col, Form, InputGroup, OverlayTrigger } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

import "../styles/PetitionInput.scss";
import CluePopover from "./CluePopover";

const PetitionInput = (props) => {
	const {
		placeholder,
		clues,
		btnTxt,
		data,
		setData,
		showClues,
		inline
	} = props;

	return (
		<Row>
			<Col>
				<InputGroup>
					<Form.Control
						className="petition-input"
						type="text"
						value={data}
						onChange={setData}
						placeholder={placeholder}
					/>
					{showClues ?
						<OverlayTrigger trigger={["hover", "trigger"]} placement="bottom-end" overlay={CluePopover(clues)} delay={0}>
							<InputGroup.Text className="petition-input-clue">
								<FontAwesomeIcon icon={faInfoCircle} style={{fontSize: "1.2rem"}} />
							</InputGroup.Text>
						</OverlayTrigger>
						:
						null
					}
				</InputGroup>
			</Col>
			<Col xs={inline ? "auto" : 12} sm="auto">
				<button className={`${props.btnClass ? props.btnClass : "petition-input-btn"} ${inline ? null : "petition-input-btn-xs"}`}>{btnTxt}</button>
			</Col>
		</Row>
	);
}

export default PetitionInput;
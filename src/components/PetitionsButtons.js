import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSatelliteDish } from "@fortawesome/free-solid-svg-icons";
import { faFlag } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

import "../styles/PetitionsButtons.scss";

const PetitionsButtons = () => {
	return (
		<Row className="petitions-buttons">
			<Col style={{padding: "0.25rem 0.2rem 0 0.3rem"}}>
				<Link to="signal-risk" className="petitions-buttons-btn">
					<FontAwesomeIcon icon={faSatelliteDish} style={{fontSize: "1.5rem", marginBottom: "0.7rem"}} />
					Signal a risk
				</Link>
			</Col>
			<Col style={{padding: "0.25rem 0.3rem 0 0.2rem"}}>
				<Link to="launch-cause" className="petitions-buttons-btn">
					<FontAwesomeIcon icon={faFlag} style={{fontSize: "1.5rem", marginBottom: "0.7rem"}} />
					Launch a cause
				</Link>
			</Col>
		</Row>
	);
}

export default PetitionsButtons;


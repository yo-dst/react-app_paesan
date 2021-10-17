import { Row, Col } from "react-bootstrap";

import "../styles/KeyChangeMakers.scss";

const KeyChangeMakers = () => {
	return (
		<Row className="centered-content key-makers">
			<Col xs={3}>
				<Row>
					<Col xs={12} className="key-makers-title">Key Change<br/>Makers</Col>
					<Col xs={12} className="key-makers-subtitle">Get Inspired by the voice and experience of lifetime militants.</Col>
					<Col xs={12} className="key-makers-txt">Get pratical guidance find mentors.</Col>
				</Row>
			</Col>
			<Col xs={9}>

			</Col>
		</Row>
	);
}

export default KeyChangeMakers;
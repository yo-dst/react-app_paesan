import { Row, Col } from "react-bootstrap";

import "../styles/Title.scss";

const Title = ({ title, color, children }) => {
	return (
		<Row className="title-container">
			<Col xs={12} sm="auto" className="title">
				<div className="title-square"></div>
				<div className="title-title" style={{color: color}}>{title}</div>
			</Col>
			<Col xs={12} sm="auto">
				<div className="title-next">
					{children}
				</div>
			</Col>
        </Row>
	);
}

export default Title;
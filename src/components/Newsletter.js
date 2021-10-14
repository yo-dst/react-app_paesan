import { Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

import "../styles/Newsletter.scss";

const Newsletter = () => {
	const [email, setEmail] = useState("");

	return (
		<Row className="centered-content newsletter">
			<Col xs={12} className="newsletter-title">
				<div>Make your voice heard Loud. Participate to the Biggest causes.</div>
			</Col>
			<Col xs={12} className="newsletter-txt">
				Signup to receive weekly <strong>human rights survey</strong> NewsLetter.
			</Col>
			<Col xs={7} className="newsletter-email">
				<Row className="w-100">
					<Col className="p-0">
						<input
							className="newsletter-input"
							value={email}
							onChange={e => setEmail(e.target.value)}
							placeholder="Enter email address"
						/>
					</Col>
					<Col xs="auto" className="p-0">			
						<button className="newsletter-subscribe-btn"><div className="newsletter-subscribe-btn-txt">Subscribe</div></button>
					</Col>
				</Row>
			</Col>
		</Row>
	);
}

export default Newsletter;
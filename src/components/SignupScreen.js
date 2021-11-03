import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../styles/SignupScreen.scss";

const SignupScreen = () => {
	const [formData, setFormData] = useState({
		firstname: "",
		lastname: "",
		email: "",
		username: "",
		password: ""
	});

	return (
		<Container fluid>
			<Row className="signup-screen">
				<Col xs={10} md={6} className="d-flex flex-column justify-content-center align-items-center">
					<div className="signup-screen-title">SIGNUP</div>
					<div className="signup-screen-register">
						Already Registered ? <Link to="/login" className="underline-on-hover">Login</Link>
					</div>
					<Form.Control
						className="signup-screen-input"
						size="md"
						type="text"
						value={formData.firstname}
						onChange={e => setFormData({ ...formData, firstname: e.target.value})}
						placeholder="First Name"
					/>
					<Form.Control
						className="signup-screen-input"
						size="md"
						type="text"
						value={formData.lastname}
						onChange={e => setFormData({ ...formData, lastname: e.target.value})}
						placeholder="Last Name"
					/>
					<Form.Control
						className="signup-screen-input"
						size="md"
						type="text"
						value={formData.email}
						onChange={e => setFormData({ ...formData, email: e.target.value})}
						placeholder="Email"
					/>
					<Form.Control
						className="signup-screen-input"
						size="md"
						type="text"
						value={formData.username}
						onChange={e => setFormData({ ...formData, username: e.target.value})}
						placeholder="Username"
					/>
					<Form.Control
						className="signup-screen-input"
						size="md"
						type="text"
						value={formData.password}
						onChange={e => setFormData({ ...formData, password: e.target.value})}
						placeholder="Password"
					/>
					<button  className="signup-screen-btn">SIGNUP</button>
				</Col>
			</Row>
		</Container>
	);
}

export default SignupScreen;
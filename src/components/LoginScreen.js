import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../styles/LoginScreen.scss";

const LoginScreen = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	return (
		<Container fluid>
			<Row className="justify-content-center login-screen">
				<Col xs={10} md={6} className="d-flex flex-column align-items-center">
					<div className="login-screen-title">LOGIN</div>
					<div className="login-screen-register">
						Not Registered Yet? <Link to="/signup" className="underline-on-hover">Signup</Link>
					</div>
					<Form.Control
						className="login-screen-input"
						size="md"
						type="text"
						value={username}
						onChange={e => setUsername(e.target.value)}
						placeholder="Username"
					/>
					<Form.Control
						className="login-screen-input"
						size="md"
						type="text"
						value={password}
						onChange={e => setPassword(e.target.value)}
						placeholder="Password"
					/>
					<button className="login-screen-btn">LOGIN</button>
				</Col>
			</Row>
		</Container>
	);
}

export default LoginScreen;
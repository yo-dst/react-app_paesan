import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

import "../styles/LoginScreen.scss";
//import Navbar from "./Navbar";

const LoginScreen = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	return (
		<Container fluid style={{marginTop: "120px"}}>
			<Row className="justify-content-center">
				<Col xs={10} md={6}>
					<div className="login-screen-title"></div>
					<Form.Control
						size="lg"
						type="text"
						value={username}
						onChange={e => setUsername(e.target.value)}
						placeholder="Username"
					/>
					<Form.Control
						size="lg"
						type="text"
						value={password}
						onChange={e => setPassword(e.target.value)}
						placeholder="Password"
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default LoginScreen;
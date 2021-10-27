import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../styles/LoginScreen.scss";
//import Navbar from "./Navbar";

const LoginScreen = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	return (
		<Container fluid style={{marginTop: "120px"}}>
			<Row className="justify-content-center login-screen">
				<Col xs={10} md={6}>
					<div className="login-screen-title">Login</div>
					<div className="login-screen-title">
						Not Registered Yet? <Link to="/register">Signup</Link>
					</div>
					<Form.Control
						size="md"
						type="text"
						value={username}
						onChange={e => setUsername(e.target.value)}
						placeholder="Username"
					/>
					<Form.Control
						size="md"
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
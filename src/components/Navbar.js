import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../styles/Navbar.scss";
import { navItems } from "../data";

const Navbar = () => {
	return (
		<Row className="navbar-wrapper">
			<Col>
				<Row className="centered-content navbar">
					{navItems.map((item, index) => (
						<Col xs="auto" className="navbar-item-wrapper" key={`navbarItem-${index}`}>
							<Link to={item.path} className="navbar-item">
								<div>{item.name}</div>
								<div className="navbar-item-underline"></div>
							</Link>
						</Col>
					))}
				</Row>
			</Col>
		</Row>
	);
}

export default Navbar;
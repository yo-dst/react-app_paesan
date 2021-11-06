import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import logo from "../images/logo.png"
import "../styles/HeaderMobile.scss";
import { navItems } from "../data";

const NavbarMobile = ({ show }) => {
	if (!show)
		return (null);
	return (
		<Row className="navbar-mobile-wrapper translate-navbar-mobile">
			<Col className="navbar-mobile">
				{navItems.map((item, index) => (
					<Link to={item.path} key={``}>{item.name}</Link>
				))}
			</Col>
		</Row>
	);
}	

const HeaderMobile = () => {
	const [show, setShow] = useState(false);

	return (
		<Container fluid className="header-mobile-wrapper">
			<Row className="header-mobile">
				<Col xs="auto">
					<button className="hamburger-btn" onClick={e => setShow(!show)}>
						{show ?
							<FontAwesomeIcon icon={faTimes} className="hamburger-icon"/>
							:
							<FontAwesomeIcon icon={faBars} className="hamburger-icon"/>
						}
					</button>
				</Col>
				<Col xs="auto" className="d-flex">
					<Link to="/">
						<img src={logo} alt="unknown" className="header-mobile-logo" />
					</Link>
				</Col>
				<Col xs="auto" className="d-flex justify-content">
					<Link to="/login" className="header-mobile-btn" style={{marginRight: "1.5rem"}}>
						<FontAwesomeIcon icon={faUser} className="header-mobile-icon" />
					</Link>
					<Link to="/" className="header-mobile-btn">
						<FontAwesomeIcon icon={faSearch} className="header-mobile-icon" />
					</Link>
				</Col>
			</Row>
			<NavbarMobile show={show} />
		</Container>
	);
}

export default HeaderMobile;
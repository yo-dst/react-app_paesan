import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import logo from "../images/logo.png"
import "../styles/HeaderMobile.scss";
import { navItems } from "../data";

const NavbarMobile = ({ show }) => {
	return (
		<Row className={`navbar-mobile ${show ? "navbar-mobile-active" : null}`}>
			{navItems.map((item, index) => (
				<Col xs={12} className="navbar-mobile-item">
					<Link to={item.path} key={``}>{item.name}</Link>
				</Col>
			))}
		</Row>
	);
}	

const HeaderMobile = () => {
	const [show, setShow] = useState(false);

	const toggle = () => {

	}

	return (
		<Container fluid className="header-mobile-wrapper">
			<Row className="header-mobile">
				<Col xs="auto">
					<div className="hamburger-btn cursor-ptr" onClick={e => setShow(!show)}>
						<FontAwesomeIcon icon={faBars} className="hamburger-icon"/>
					</div>
				</Col>
				<Col xs="auto" className="d-flex">
					<Link to="/">
						<img src={logo} alt="unknown" className="header-mobile-logo" />
					</Link>
				</Col>
				<Col xs="auto" className="d-flex justify-content">
					<Link to="/login" className="header-mobile-btn">
						<FontAwesomeIcon icon={faUser} className="header-mobile-icon" />
					</Link>
				</Col>
			</Row>
			<NavbarMobile show={show} />
		</Container>
	);
}

export default HeaderMobile;
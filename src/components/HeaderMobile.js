import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link } from "react-router-dom";

import logo from "../images/logo.png"
import "../styles/HeaderMobile.scss";
import { navItems } from "../data";

const MobileMenu = (props) => {
	const {
		show,
		setShow
	} = props;

	return (
		<div className={`mobile-menu ${show ? "mobile-menu-active" : null}`}>
			<div className="mobile-menu-header">
				<button className="mobile-menu-close-btn" onClick={e => setShow(false)}>
					<FontAwesomeIcon icon={faTimes} className="mobile-menu-close-icon" />
				</button>
				<Link to="/" className="mobile-menu-search-link">
					<FontAwesomeIcon icon={faSearch} className="mobile-menu-search-icon" />
				</Link>
			</div>
			<div className="mobile-menu-body">
				{navItems.map((item, index) => (
					<NavLink to={item.path} className="mobile-menu-body-item" key={`mobile-menu-body-item-${index}`}>{item.name}</NavLink>
				))}
			</div>
			<div className="mobile-menu-footer">
				<Link to="signal-risk" className="mobile-menu-footer-btn">
					Signal a risk
				</Link>
				<Link to="launch-cause" className="mobile-menu-footer-btn">
					Launch a cause
				</Link>
			</div>
		</div>
	);
}

const HeaderMobile = () => {
	const [show, setShow] = useState(false);

	return (
		<Container fluid className="header-mobile-wrapper">
			<Row className="header-mobile">
				<Col xs="auto">
					<div className="hamburger-btn cursor-ptr" onClick={e => setShow(true)}>
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
			<MobileMenu show={show} setShow={setShow} width="60vw" />
		</Container>
	);
}

export default HeaderMobile;
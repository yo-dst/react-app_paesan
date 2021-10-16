import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import '../styles/Header.scss';
import { navItems } from "../data";
import SearchBar from "./SearchBar";

const Header = () => {
    return (
        <>
            <Container fluid className="header-wrapper">
                <Row className="centered-content header">
                    <Col className="d-flex align-items-center">
                        <button className="header-btn" style={{marginRight: "1.5rem"}}>
                            <div className="header-btn-inner">Signal a risk</div>
                        </button>
                        <button className="header-btn">
                            <div className="header-btn-inner">Launch a cause</div>
                        </button>
                    </Col>
                    <Col className="d-flex align-items-center justify-content-center">
                        <Link to="/">
                            <img src="https://picsum.photos/300/100" alt="unknown" height="80px" />
                        </Link>
                    </Col>
                    <Col className="d-flex align-items-center justify-content-end">
                        <Link to="/login">
                            <FontAwesomeIcon className="login-icon" icon={faUser} />
                        </Link>
                        <SearchBar />
                    </Col>
                </Row>
            </Container>
            <Container fluid className="navbar-wrapper">
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
            </Container>
        </>
    );
}

export default Header;
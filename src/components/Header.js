import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import '../styles/Header.scss';
import logo from "../images/logo.png"
import SearchPopover from "./SearchPopover";

const Header = () => {
    return (
        <>
            <Container fluid>
                <Row className="header">
                    <Col className="d-flex align-items-center">
                        <Link to="signal-risk" className="header-btn" style={{marginRight: "1.5rem"}}>
                            <div className="header-btn-inner">Signal a risk</div>
                        </Link>
                        <Link to="launch-cause" className="header-btn">
                            <div className="header-btn-inner">Launch a cause</div>
                        </Link>
                    </Col>
                    <Col className="d-flex align-items-center justify-content-center">
                        <Link to="/" >
                            <img src={logo} alt="unknown" height="110px" />
                        </Link>
                    </Col>
                    <Col className="d-flex align-items-center justify-content-end">
                        <Link to="/login">
                            <FontAwesomeIcon className="login-icon" icon={faUser} inverse />
                        </Link>
                        <SearchPopover />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Header;
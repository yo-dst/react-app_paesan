import { Row, Col } from "react-bootstrap";

import { navItems } from '../data';
import "../styles/FooterNavbar.scss";

const FooterNavbar = () => {
    return (
        <Row className="footer-navbar">
            {navItems.map((item, index) => (
                <Col xs="auto" className="footer-navbar-item" key={`footerNav-${index}`}>
                    <a href={item.path}>{item.name}</a>
                </Col>
            ))}
        </Row>
    );
}

export default FooterNavbar;
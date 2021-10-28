import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faSkype } from "@fortawesome/free-brands-svg-icons";

import '../styles/Footer.scss';
import logo from "../images/logo.png";
import FooterNavbar from './FooterNavbar';

const footerBotContent = [
    {
        name: "Trust & Safety",
        url: "/#"
    },
    {
        name: "Terms Of Use",
        url: "/#"
    },
    {
        name: "Privacy Policy",
        url: "/#"
    },
    {
        name: "Cookie Policy",
        url: "/#"
    },
    {
        name: "Accessibility Policy",
        url: "/#"
    },
    {
        name: "Novice Of Content",
        url: "/#"
    }
];

const footerTopContent = [
    {
        title: "ABOUT",
        items: [
            {
                name: "About the Initiative",
                url: "/#"
            },
            {
                name: "The Manifest",
                url: "/#"
            },
            {
                name: "Stats",
                url: "/#"
            },
            {
                name: "Press",
                url: "/#"
            },
            {
                name: "Contributing",
                url: "/#"
            }
        ]
    },
    {
        title: "SUPPORT",
        items: [
            {
                name: "Help Center",
                url: "/#"
            },
            {
                name: "Resources",
                url: "/#"
            },
            {
                name: "DC token",
                url: "/#"
            },
            {
                name: "Node Operators",
                url: "/#"
            },
            {
                name: "Mobile Apps",
                url: "/#"
            }
        ]
    },
    {
        title: "MORE FROM US",
        items: [
            {
                name: "NewsLetters",
                url: "/#"
            },
            {
                name: "The Human Right Survey",
                url: "/#"
            },
            {
                name: "Change Makers",
                url: "/#"
            },
            {
                name: "Channels",
                url: "/#"
            },
            {
                name: "Publishers",
                url: "/#"
            }
        ]
    }
]

const socialMedia = [
    {
        icon: faTwitter,
        url: "/#"
    },
    {
        icon: faFacebook,
        url: "/#"
    },
    {
        icon: faInstagram,
        url: "/#"
    },
    {
        icon: faSkype,
        url: "/#"
    },
    {
        icon: faLinkedin,
        url: "/#"
    }
];

const Footer = () => {
    return (
        <>  
            <FooterNavbar />
            <Container fluid className="footer">
                    <Row className="centered-content">
                        <Col xs={12} className="footer-top">
                            <Row className="justify-content-around">
                                <Col xs={11} sm={5} xl={4} className="footer-top-block">
                                    <img src={logo} alt="unknown" width="80%" className="footer-top-logo" />
                                    <div className="footer-top-txt">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel interdum ex.
                                    </div>
                                    <div className="footer-social-icons">
                                        {socialMedia.map((item, index) => (
                                            <a href={item.url} className="footer-social-icon-wrapper" key={`socialIcons-${index}`}>
                                                <FontAwesomeIcon icon={item.icon} className="footer-social-icon" />
                                            </a>
                                        ))}
                                    </div>
                                </Col>
                                {footerTopContent.map(item => (
                                    <Col xs={11} sm={5} xl={2} key={item.title} className="footer-top-block">
                                        <div className="footer-top-list">
                                            <div className="footer-top-list-title">{item.title}</div>
                                            {item.items.map(item => (
                                                <a href={item.url} className="footer-top-list-item" key={item.name}>{item.name}</a>
                                            ))}
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Col>  
                        <Col xs={12}>
                            <Row className="footer-bot">
                                {footerBotContent.map((item, index) => (
                                    <Col xs="auto" className="footer-bot-item" key={`footerBotContent-${index}`}>
                                        <a href={item.url}>{item.name}</a>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>
            </Container>
        </>
    );
}

export default Footer;
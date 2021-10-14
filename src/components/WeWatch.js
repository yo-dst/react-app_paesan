import { Container, Row, Col } from "react-bootstrap";
import { Player, BigPlayButton } from "video-react";

import "../styles/WeWatch.scss";

const WeWatch = () => {
    return (
        <Container fluid className="wewatch-wrapper">
            <Row className="centered-content wewatch">
                <Col md={12} lg={6}>
                    <div className="wewatch-video-wrapper">
                        <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" playsInline>
                            <BigPlayButton position="center" />
                        </Player>
                    </div>
                </Col>
                <Col md={12} lg={6}>
                    <div className="wewatch-title">
                        <div className="wewatch-title-bar"></div>
                        We Watch The Gatekeepers
                    </div>
                    <div className="wewatch-txt">Together, we can use our voices and our energy to protect the human rights that are provided to each of us by the Natural Laws. We aim to provide change making tools, financial and legal resources to enable each of us to protect our fundamental rights globally."</div>
                    <a href="/#">Read the manifest</a>
                </Col>
            </Row>
        </Container>
        
    );
}

export default WeWatch;
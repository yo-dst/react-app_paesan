import { Container, Row, Col } from "react-bootstrap";

import "../styles/HomeScreen.scss";
import SuccessStories from './SuccessStories';
import Features from "./Features";
import Newsletter from "./Newsletter";

const HomeScreen = () => {
	return (
		<Container fluid>
			<Row className="centered-content qcic">
				<Col md={12} lg={6}>
                    <img src="https://picsum.photos/500/300" alt="unknown" width="97%" />
                </Col>
                <Col md={12} lg={6} className="mt-lg-0 mt-md-5">
                    <div className="qcic-title">
                        <div className="qcic-title-bar"></div>
                        QCIC exists to help freedom and human rights survive even in times of uncertainty.
                    </div>
                    <div className="qcic-txt">QCIC is a safe harbour for individuals, NPOs, NGOs, Scientists, Lawyers, Journalists, Entrepreneurs, Politicians and teachers willing to protect natural laws and human fundamental values starting from the family, the land and the traditions."</div>
                    <a href="/#">Read the manifest</a>
                </Col>
			</Row>
			<Newsletter />
			<Features />
            <SuccessStories />
		</Container>
	);
}

export default HomeScreen;
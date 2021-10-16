import { Container, Row, Col, Image, ProgressBar } from "react-bootstrap";
import { faThumbsUp, faThumbsDown, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../styles/HomeScreen.scss";
import SuccessStories from './SuccessStories';
import Features from "./Features";
import Newsletter from "./Newsletter";
import InYourArea from "./InYourArea";
import Channels from "./Channels";
import ChangeMakers from "./ChangeMakers";
import NewCauses from "./NewCauses";
import FreshFavorites from "./FreshFavorites";


const urgentContent = [
    {
        img: "https://picsum.photos/500/300",
        title: "This is a cool story, really really cool",
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis imperdiet ipsum. Sed sagittis ex metus, sed vestibulum erat rutrum nec.",
        organisation: "Organisation Name 1"
    },
    {
        img: "https://picsum.photos/500/300",
        title: "This is a cool story, really really cool",
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis imperdiet ipsum. Sed sagittis ex metus, sed vestibulum erat rutrum nec.",
        organisation: "Organisation Name 2"
    },
    {
        img: "https://picsum.photos/500/300",
        title: "This is a cool story, really really cool",
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis imperdiet ipsum. Sed sagittis ex metus, sed vestibulum erat rutrum nec.",
        organisation: "Organisation Name 3"
    },
    {
        img: "https://picsum.photos/500/300",
        title: "This is a cool story, really really cool",
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis imperdiet ipsum. Sed sagittis ex metus, sed vestibulum erat rutrum nec.",
        organisation: "Organisation Name 4"
    },
    {
        img: "https://picsum.photos/500/300",
        title: "This is a cool story, really really cool",
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis imperdiet ipsum. Sed sagittis ex metus, sed vestibulum erat rutrum nec.",
        organisation: "Organisation Name 5"
    },
    {
        img: "https://picsum.photos/500/300",
        title: "This is a cool story, really really cool",
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis imperdiet ipsum. Sed sagittis ex metus, sed vestibulum erat rutrum nec.",
        organisation: "Organisation Name 6"
    },
    {
        img: "https://picsum.photos/500/300",
        title: "This is a cool story, really really cool",
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis imperdiet ipsum. Sed sagittis ex metus, sed vestibulum erat rutrum nec.",
        organisation: "Organisation Name 7"
    },
    {
        img: "https://picsum.photos/500/300",
        title: "This is a cool story, really really cool",
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis imperdiet ipsum. Sed sagittis ex metus, sed vestibulum erat rutrum nec.",
        organisation: "Organisation Name 8"
    }
];

const HomeScreen = () => {
	const [selectedPage, setSelectedPage] = useState(0);
	//const nbPages = Math.floor(urgentContent.length / 3);

	useEffect(() => {

	}, [selectedPage]);

	return (
		<Container fluid>
			<Row className="centered-content landing">
				<Col className="featured-cause">
					<div className="featured-cause-section-title">
						<div className="featured-cause-section-title-square"></div>
						<div className="featured-cause-section-title-title">FEATURED CAUSE</div>
					</div>
					<Image src="https://picsum.photos/1000/800" fluid className="featured-cause-img" style={{borderRadius: "4px 4px 0 0"}} />
					<ProgressBar className="featured-cause-progress-bar" now={55} />
					<div className="featured-cause-title">Cause Name, Country</div>
					<div className="featured-cause-timeLeft">XX Days/hours/minutes left</div>
					<div className="featured-cause-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis imperdiet ipsum. Sed sagittis ex metus, sed vestibulum erat rutrum nec.</div>
					<div className="featured-cause-hashtags">#Freedom Of Speech, #Heathcare</div>
					<div className="featured-cause-participants">5,059,575 Participants</div>
					<div className="featured-cause-organisation">By Organisation Name</div>
				</Col>
				<Col className="urgent">
					<div className="featured-cause-section-title">
						<div className="featured-cause-section-title-square"></div>
						<div className="urgent-section-title">URGENT REQUIRES ACTION</div>
					</div>
					{urgentContent.slice(selectedPage * 3, selectedPage * 3 + 3).map((item, index) => (
						<div className="urgent-item" key={`urgent-item-${index}`}>
							<Image src={item.img} className="urgent-img" />
							<div className="urgent-body">
								<div className="urgent-title">Ut blanditis elit a quas</div>
								<ProgressBar className="urgent-prog-bar" now={66} />
								<div className="urgent-participants"><strong>3,000,000 Participants</strong>, 3 days left</div>
								<div className="urgent-author">By Tom</div>
								<div className="urgent-icons">
									<div className="urgent-icon-wrapper">
										<FontAwesomeIcon icon={faBookmark} />
									</div>
									<div className="urgent-icon-wrapper">
										<FontAwesomeIcon icon={faThumbsUp} />
									</div>
									<div className="urgent-icon-wrapper">
										<FontAwesomeIcon icon={faThumbsDown} />
									</div>
								</div>
							</div>
						</div>
					))}
					<div>
						
					</div>
					{/*
					<div>
						
						<button onClick={e => setSelectedPage(selectedPage + 1)}>plus</button>
						<button onClick={e => setSelectedPage(selectedPage - 1)}>moins</button>
					</div>
					*/}
				</Col>
			</Row>
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
			<FreshFavorites />
			<Newsletter />
			<NewCauses />
			<ChangeMakers />
			<Channels />
			<InYourArea />
			<Features />
            <SuccessStories />
		</Container>
	);
}

export default HomeScreen;
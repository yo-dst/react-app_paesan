import { Container, Row, Col, Image, ProgressBar } from "react-bootstrap";
import { faThumbsUp, faThumbsDown, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
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
import Pagination from "./Pagination";
import KeyChangeMakers from "./KeyChangeMakers";
import Navbar from "./Navbar";
import WeWatch from "./WeWatch";
import FooterNavbar from "./FooterNavbar";

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
        organisation: "Organisation Name 5"
    },
    {
        img: "https://picsum.photos/500/300",
        title: "This is a cool story, really really cool",
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis imperdiet ipsum. Sed sagittis ex metus, sed vestibulum erat rutrum nec.",
        organisation: "Organisation Name 6"
    }
];

const HomeScreen = () => {
	const [selectedPage, setSelectedPage] = useState(0);
	const nbPages = Math.ceil(urgentContent.length / 3);

	return (
		<Container fluid>
			<Navbar />
			<Row className="landing">
				<Col xs={12} xl={6} className="featured-cause">
					<div className="featured-cause-section-title">
						<div className="featured-cause-section-title-square"></div>
						<div className="featured-cause-section-title-title">FEATURED CAUSE</div>
					</div>
					<div className="cursor-ptr">
						<Image src="https://picsum.photos/1000/800" fluid className="featured-cause-img" style={{borderRadius: "4px 4px 0 0"}} />
						<ProgressBar className="featured-cause-progress-bar" now={55} />
						<div className="featured-cause-body">
							<div className="featured-cause-title">Cause Name, Country</div>
							<div className="featured-cause-timeLeft">XX Days/hours/minutes left</div>
							<div className="featured-cause-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis imperdiet ipsum. Sed sagittis ex metus, sed vestibulum erat rutrum nec.</div>
							<div className="featured-cause-hashtags">#Freedom Of Speech, #Heathcare</div>
							<div className="featured-cause-participants">5,059,575 Participants</div>
							<div className="featured-cause-organisation">By Organisation Name</div>
						</div>
					</div>
					
					
				</Col>
				<Col xs={12} xl={6} className="urgent">
					<div className="featured-cause-section-title">
						<div className="featured-cause-section-title-square"></div>
						<div className="urgent-section-title">URGENT REQUIRES ACTION</div>
					</div>
					{urgentContent.slice(selectedPage * 3, selectedPage * 3 + 3).map((item, index) => (
						<div className="urgent-item" key={`urgent-item-${index}`}>
							<Image src={item.img} className="urgent-img" />
							<div className="urgent-item-body">
								<div className="urgent-title">Ut blanditis elit a quas</div>
								<ProgressBar className="urgent-prog-bar" now={66} />
								<div className="urgent-txt d-sm-none d-md-block d-xl-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis imperdiet ipsum. Sed sagittis ex metus, sed vestibulum erat rutrum nec.</div>
								<div className="urgent-participants"><strong>3,000,000 Participants</strong>, 3 days left</div>
								<div className="urgent-author">By {item.organisation}</div>
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
					{nbPages !== 1 ?
						<Pagination nbPages={nbPages} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
						:
						null
					}
				</Col>
			</Row>
			<Row className="bg-darkwhite">
				<Col className="p-0">
					<Row className="centered-content qcic">
					<Col md={12} lg={6}>
						<img src="https://picsum.photos/600/350" alt="unknown" width="97%" />
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
				</Col>
			</Row>
			
			<Newsletter />
			<Row className="bg-darkwhite">
				<Col className="p-0">
					<NewCauses />
					<ChangeMakers />
					<Channels />
					<InYourArea />
				</Col>
			</Row>
			<Features />
			<KeyChangeMakers />
            <SuccessStories />
			<WeWatch />
			<FooterNavbar />
		</Container>
	);
}

export default HomeScreen;
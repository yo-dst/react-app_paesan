import { Row, Col } from "react-bootstrap";

import "../styles/InYourArea.scss";
import Slider from "./Slider";
import Title from "./Title";
import DiscoverMore from "./DiscoverMore";
import SliderCard from "./SliderCard";

const inYourAreaContent = [
    {
        img: "https://picsum.photos/600/400",
        title: "This is a cool story, really really cool",
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis imperdiet ipsum. Sed sagittis ex metus, sed vestibulum erat rutrum nec.",
        organisation: "Organisation Name 1"
    },
    {
        img: "https://picsum.photos/600/400",
        title: "This is a cool story, really really cool",
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis imperdiet ipsum. Sed sagittis ex metus, sed vestibulum erat rutrum nec.",
        organisation: "Organisation Name 2"
    },
    {
        img: "https://picsum.photos/600/400",
        title: "This is a cool story, really really cool",
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis imperdiet ipsum. Sed sagittis ex metus, sed vestibulum erat rutrum nec.",
        organisation: "Organisation Name 3"
    },
    {
        img: "https://picsum.photos/600/400",
        title: "This is a cool story, really really cool",
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis imperdiet ipsum. Sed sagittis ex metus, sed vestibulum erat rutrum nec.",
        organisation: "Organisation Name 4"
    },
    {
        img: "https://picsum.photos/600/400",
        title: "This is a cool story, really really cool",
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis imperdiet ipsum. Sed sagittis ex metus, sed vestibulum erat rutrum nec.",
        organisation: "Organisation Name 5"
    },
    {
        img: "https://picsum.photos/600/400",
        title: "This is a cool story, really really cool",
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis imperdiet ipsum. Sed sagittis ex metus, sed vestibulum erat rutrum nec.",
        organisation: "Organisation Name 6"
    },
    {
        img: "https://picsum.photos/600/400",
        title: "This is a cool story, really really cool",
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis imperdiet ipsum. Sed sagittis ex metus, sed vestibulum erat rutrum nec.",
        organisation: "Organisation Name 7"
    },
    {
        img: "https://picsum.photos/600/400",
        title: "This is a cool story, really really cool",
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis imperdiet ipsum. Sed sagittis ex metus, sed vestibulum erat rutrum nec.",
        organisation: "Organisation Name 8"
    }
];

const InYourArea = () => {
	return (
		<Row className="area">
            <Col>
                <Title title="IN YOUR AREA">
                    <DiscoverMore />
                </Title>
                <Slider>
                    {inYourAreaContent.map((item, index) => (
						<SliderCard img={item.img} progressBar={40} key={`area-${index}`}>
							<div className="area-title">Cause Name, Country</div>
							<div className="area-timeLeft">XX Days/hours/minutes left</div>
							<div className="area-txt">{item.txt}</div>
							<div className="area-hashtags">#Freedom Of Speech, #Heathcare</div>
							<div className="area-participants">3,000,000 Participants</div>
							<div className="area-organisation">By {item.organisation}</div>
						</SliderCard>
                    ))}
                </Slider>
            </Col>
        </Row>
	);
}

export default InYourArea;
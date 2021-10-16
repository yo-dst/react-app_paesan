import { Row, Col } from "react-bootstrap";

import "../styles/NewCauses.scss";
import Slider from "./Slider";
import Title from "./Title";
import DiscoverMore from "./DiscoverMore";
import SliderCard from "./SliderCard";

const newCausesContent = [
    {
        img: "https://picsum.photos/600/500",
        title: "This is a cool story, really really cool",
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis imperdiet ipsum. Sed sagittis ex metus, sed vestibulum erat rutrum nec.",
        organisation: "Organisation Name 1"
    },
    {
        img: "https://picsum.photos/600/500",
        title: "This is a cool story, really really cool",
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis imperdiet ipsum. Sed sagittis ex metus, sed vestibulum erat rutrum nec.",
        organisation: "Organisation Name 2"
    },
    {
        img: "https://picsum.photos/600/500",
        title: "This is a cool story, really really cool",
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis imperdiet ipsum. Sed sagittis ex metus, sed vestibulum erat rutrum nec.",
        organisation: "Organisation Name 3"
    },
    {
        img: "https://picsum.photos/600/500",
        title: "This is a cool story, really really cool",
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis imperdiet ipsum. Sed sagittis ex metus, sed vestibulum erat rutrum nec.",
        organisation: "Organisation Name 4"
    },
    {
        img: "https://picsum.photos/600/500",
        title: "This is a cool story, really really cool",
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis imperdiet ipsum. Sed sagittis ex metus, sed vestibulum erat rutrum nec.",
        organisation: "Organisation Name 5"
    },
    {
        img: "https://picsum.photos/600/500",
        title: "This is a cool story, really really cool",
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis imperdiet ipsum. Sed sagittis ex metus, sed vestibulum erat rutrum nec.",
        organisation: "Organisation Name 6"
    },
    {
        img: "https://picsum.photos/600/500",
        title: "This is a cool story, really really cool",
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis imperdiet ipsum. Sed sagittis ex metus, sed vestibulum erat rutrum nec.",
        organisation: "Organisation Name 7"
    },
    {
        img: "https://picsum.photos/600/500",
        title: "This is a cool story, really really cool",
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis imperdiet ipsum. Sed sagittis ex metus, sed vestibulum erat rutrum nec.",
        organisation: "Organisation Name 8"
    }
];

const NewCauses = () => {
	return (
		<Row className="new-causes">
            <Col>
                <Title title="NEW CAUSES">
                    <DiscoverMore />
                </Title>
                <Slider>
                    {newCausesContent.map((item, index) => (
						<SliderCard img={item.img} progressBar={98} key={`new-causes-${index}`}>
							<div className="new-causes-title">Cause Name, Country</div>
							<div className="new-causes-timeLeft">XX Days/hours/minutes left</div>
							<div className="new-causes-txt">{item.txt}</div>
							<div className="new-causes-hashtags">#Freedom Of Speech, #Heathcare</div>
							<div className="new-causes-participants">5,059,575 Participants</div>
							<div className="new-causes-organisation">By {item.organisation}</div>
						</SliderCard>
                    ))}
                </Slider>
            </Col>
        </Row>
	);
}

export default NewCauses;
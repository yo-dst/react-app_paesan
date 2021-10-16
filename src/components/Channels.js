import { Row, Col } from "react-bootstrap"; 

import "../styles/Channels.scss";
import SliderCard from "./SliderCard";
import Title from "./Title";
import DiscoverMore from "./DiscoverMore";
import Slider from "./Slider";

const channelsContent = [
    {
        img: "https://picsum.photos/600/550",
        title: "This is a cool story, really really cool",
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis imperdiet ipsum. Sed sagittis ex metus, sed vestibulum erat rutrum nec.",
        organisation: "Organisation Name 1"
    },
    {
        img: "https://picsum.photos/600/550",
        title: "This is a cool story, really really cool",
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis imperdiet ipsum. Sed sagittis ex metus, sed vestibulum erat rutrum nec.",
        organisation: "Organisation Name 2"
    },
    {
        img: "https://picsum.photos/600/550",
        title: "This is a cool story, really really cool",
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis imperdiet ipsum. Sed sagittis ex metus, sed vestibulum erat rutrum nec.",
        organisation: "Organisation Name 3"
    },
    {
        img: "https://picsum.photos/600/550",
        title: "This is a cool story, really really cool",
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis imperdiet ipsum. Sed sagittis ex metus, sed vestibulum erat rutrum nec.",
        organisation: "Organisation Name 4"
    },
    {
        img: "https://picsum.photos/600/550",
        title: "This is a cool story, really really cool",
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis imperdiet ipsum. Sed sagittis ex metus, sed vestibulum erat rutrum nec.",
        organisation: "Organisation Name 5"
    },
    {
        img: "https://picsum.photos/600/550",
        title: "This is a cool story, really really cool",
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis imperdiet ipsum. Sed sagittis ex metus, sed vestibulum erat rutrum nec.",
        organisation: "Organisation Name 6"
    },
    {
        img: "https://picsum.photos/600/550",
        title: "This is a cool story, really really cool",
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis imperdiet ipsum. Sed sagittis ex metus, sed vestibulum erat rutrum nec.",
        organisation: "Organisation Name 7"
    },
    {
        img: "https://picsum.photos/600/550",
        title: "This is a cool story, really really cool",
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis imperdiet ipsum. Sed sagittis ex metus, sed vestibulum erat rutrum nec.",
        organisation: "Organisation Name 8"
    }
];

const Channels = () => {
	return (
		<Row className="channels">
            <Col>
                <Title title="CHANNELS">
                    <DiscoverMore />
                </Title>
                <Slider>
                    {channelsContent.map((item, index) => (
						<SliderCard img={item.img} progressBar={78} key={`channels-${index}`}>
							<div className="channel-title">Channel Name, Country</div>
							<div className="channel-txt">{item.txt}</div>
							<div className="channel-hashtags">#Video, #Podcast, #Heathcare</div>
						</SliderCard>
                    ))}
                </Slider>
            </Col>
        </Row>
	);
}
export default Channels;
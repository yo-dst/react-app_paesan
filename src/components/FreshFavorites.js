import { Row, Col } from "react-bootstrap";

import "../styles/FreshFavorites.scss";
import Slider from "./Slider";
import Title from "./Title";
import DiscoverMore from "./DiscoverMore";
import SliderCard from "./SliderCard";

const freshFavoritesContent = [
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

const FreshFavorites = () => {
	return (
		<Row className="fresh-favorites">
            <Col>
                <Title title="FRESH FAVORITES">
                    <DiscoverMore />
                </Title>
                <Slider>
                    {freshFavoritesContent.map((item, index) => (
						<SliderCard img={item.img} progressBar={98} key={`fresh-favorites-${index}`}>
							<div className="fresh-favorites-title">Cause Name, Country</div>
							<div className="fresh-favorites-timeLeft">XX Days/hours/minutes left</div>
							<div className="fresh-favorites-txt">{item.txt}</div>
							<div className="fresh-favorites-hashtags">#Freedom Of Speech, #Heathcare</div>
							<div className="fresh-favorites-participants">5,059,575 Participants</div>
							<div className="fresh-favorites-organisation">By {item.organisation}</div>
						</SliderCard>
                    ))}
                </Slider>
            </Col>
        </Row>
	);
}

export default FreshFavorites;
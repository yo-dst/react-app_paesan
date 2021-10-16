import Slider from "react-slick";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import "../styles/Slider.scss";

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <button className="arrow-next" onClick={onClick}>
            <FontAwesomeIcon className="arrow-next-icon" icon={faAngleRight} />
        </button>
    );
}

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <button className="arrow-prev" onClick={onClick}>
            <FontAwesomeIcon className="arrow-prev-icon" icon={faAngleLeft} />
        </button>
    );
}

const CustomSlider = (props) => {
	const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 20000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

	return (
		<Row className="centered-content slider">
			<Col xs={12}>
				<Slider {...settings}>
					{props.children}
				</Slider>
			</Col>
		</Row>
	);
}

export default CustomSlider;
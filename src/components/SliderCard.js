import { Image, ProgressBar } from "react-bootstrap";

import "../styles/SliderCard.scss";

const SliderCard = (props) => {
	return (
		<div className="sliderCard-wrapper">
			<div className="sliderCard">
				<Image src={props.img} fluid />
				{props.progressBar? <ProgressBar className="sliderCar-progress-bar" now={props.progressBar} /> : null}
				<div className="sliderCard-body">
					{props.children}
				</div>
			</div>
		</div>
	);
}

export default SliderCard;
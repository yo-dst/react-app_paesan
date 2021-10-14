import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "../styles/DiscoverMore.scss";

const DiscoverMore = () => {
	return (
		<div className="discover-more">
			<div className="discover-more-txt">Discover More</div>
			<FontAwesomeIcon className="discover-more-icon" icon={faArrowRight} />
		</div>
		
	);
}

export default DiscoverMore;
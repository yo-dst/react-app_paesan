import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "../styles/SearchPopover.scss";

const	SearchPopover = () => {
	return (
		<FontAwesomeIcon icon={faSearch} className="search-popover-icon" />
	);
}

export default SearchPopover;
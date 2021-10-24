import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Popover, OverlayTrigger } from "react-bootstrap";

import "../styles/SearchPopover.scss";
import SearchBar from "./SearchBar";


const	SearchPopover = () => {
	return (
		
			<FontAwesomeIcon icon={faSearch} className="search-popover-icon" />
	
	);
}

export default SearchPopover;
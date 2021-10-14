import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "../styles/SearchBar.scss";

const SearchBar = () => {
	const [input, setInput] = useState("");
	const inputRef = useRef();

	return (
		<div className="search-bar" onClick={e => inputRef.current.focus()}>
			<input 
				className="search-bar-search"
				ref={inputRef}
				value={input}
				placeholder={"Search..."}
				onChange={(e) => setInput(e.target.value)}
				onKeyDown={e => {
					if (e.key === "Enter")
						console.log("searching");
				}}
			/>
			<FontAwesomeIcon className="search-bar-icon" icon={faSearch} />
		</div>
	);
}

export default SearchBar;


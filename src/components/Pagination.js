import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "../styles/Pagination.scss";

const Pagination = ({ nbPages, pageNumberLimit, currentPage, setCurrentPage }) => {
	const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(pageNumberLimit);
	const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

	const pages = [];
	for (let i = 1; i < nbPages; i++) {
		pages.push(i);
	}

	const handleClick = (e) => {
		setCurrentPage(parseInt(e.target.id));
	}

	const renderPageNumbers = pages.map(number => {
		if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
			return (
				<div 
					key={number} 
					id={number} 
					onClick={handleClick}
					className={`pagination-item ${currentPage === number ? "pagination-item-active" : null}`}
				>
					{number}
				</div>
			);
		}
		return (null);
	});

	const handleNext = () => {
		if (currentPage === nbPages - 1)
			return ;

		setCurrentPage(currentPage + 1);

		if(currentPage + 1 > maxPageNumberLimit) {
			setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
			setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
		}
	}

	const handlePrev = () => {
		if (currentPage === 1)
			return ;
		setCurrentPage(currentPage - 1);

		if((currentPage - 1) % pageNumberLimit === 0) {
			setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
			setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
		}
	}

	if (nbPages <= 1)
		return (null);
	return (
		<div className="pagination">
		<button className="pagination-prev" onClick={handlePrev}>
			<FontAwesomeIcon className="pagination-icon" icon={faChevronLeft} />
		</button>
		{renderPageNumbers}
		<button className="pagination-next" onClick={handleNext}>
			<FontAwesomeIcon className="pagination-icon" icon={faChevronRight} />
		</button>
	</div>
	);
}

export default Pagination;
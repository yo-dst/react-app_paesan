import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "../styles/Pagination.scss";

const Pagination = ({ nbPages, selectedPage, setSelectedPage }) => {
	const pagItems = [];

	if (nbPages > 7) {

	} else {
		for (let i = 0; i < nbPages; i++) {
			pagItems.push(
				<button onClick={e => setSelectedPage(i)} className={`custom-pagination-item ${i === selectedPage ? "custom-active" : null}`} key={`custom-pagination-item-${i}`}>
					{i + 1}
				</button>
			);
		}
	}
	
	const handlePrev = () => {
		if (selectedPage !== 0)
			setSelectedPage(selectedPage - 1);
	}

	const handleNext = () => {
		if (selectedPage !== nbPages - 1)
			setSelectedPage(selectedPage + 1);
	}

	if (nbPages <= 1)
		return (null);
	return (
		<div className="custom-pagination">
		<button className="custom-pagination-prev" onClick={handlePrev}>
			<FontAwesomeIcon className="custom-pagination-icon" icon={faChevronLeft} />
		</button>
		{pagItems}
		<button className="custom-pagination-next" onClick={handleNext}>
			<FontAwesomeIcon className="custom-pagination-icon" icon={faChevronRight} />
		</button>
	</div>
	);
}

export default Pagination;
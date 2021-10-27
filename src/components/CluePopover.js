import { Popover } from "react-bootstrap";

import "../styles/CluePopover.scss";

const CluePopover = (items) => (
	<Popover id="clue-popover" placement="bottom-end">
		<Popover.Content>
			{items.map((item, index) => ( 
				<div style={index !== items.length - 1 ? {marginBottom: "1rem"} : null} key={item.clue}>
					<div className="clue-popover-clue">{item.clue}</div>
					<div className="clue-popover-details">{item.details}</div>
				</div>
			))}
		</Popover.Content>
	</Popover>
)

export default CluePopover;
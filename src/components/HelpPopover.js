import { useState, useRef } from "react";
import { Popover, Overlay, Button } from "react-bootstrap";

import "../styles/HelpPopover.scss";

const HelpPopover = () => {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);
  
    const handleClick = (event) => {
		setShow(!show);
		setTarget(event.target);
    };
  
    return (
        <div ref={ref}>
        <Button onClick={handleClick}>Holy guacamole!</Button>
			<Overlay
			show={show}
			target={target}
			placement="bottom"
			container={ref.current}
			containerPadding={20}
			>
			<Popover id="popover-contained">
					<Popover.Title as="h3">Popover bottom</Popover.Title>
					<Popover.Content>
						<strong>Holy guacamole!</strong> Check this info.
					</Popover.Content>
			</Popover>
			</Overlay>
      	</div>
    );
}

export default HelpPopover;
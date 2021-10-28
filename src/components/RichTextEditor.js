import { Row, Col, OverlayTrigger } from "react-bootstrap";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from "html-react-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

import "../styles/RichTextEditor.scss";
import CluePopover from "./CluePopover";

const RichTextEditor = ({ state, setState, clues }) => {
	return (
		<>
			<div className="richtext-editor-wrapper">
				<CKEditor
					config={{
						heigth: 500
					}}
					className="richtext-editor"
					editor={ClassicEditor}
					data={state.description}
					onChange={(event, editor) => {
						const data = editor.getData();
						setState({ ...state, description: data});
					}}
				/>
				<OverlayTrigger trigger={["hover", "trigger"]} placement="bottom-end" overlay={CluePopover(clues)} delay={0}>
					<div className="richtext-editor-clue">
						<FontAwesomeIcon icon={faInfoCircle} style={{fontSize: "1.2rem"}} />
					</div>
				</OverlayTrigger>
			</div>
			<Row className="richtext-editor-bottom">
				<Col className="richtext-editor-bottom-txt">
					<div className="d-flex align-items-center">
						<div className="richtext-editor-bottom-icon-wrapper">
							<FontAwesomeIcon icon={faInfo} className="richtext-editor-bottom-icon" />
						</div>
						<div>The most successful causes tend to be atleast 3 paragraphs long(about 1000 characters in length).</div>
					</div>
				</Col>
				<Col xs={12} sm="auto" className="d-flex justify-content-end">
					<button className="richtext-editor-btn">Continue</button>
				</Col>
			</Row>
			<Row className="mt-4">
				<Col>
					{parse(state.description)}
				</Col>
			</Row>
		</>
	);
}

export default RichTextEditor;

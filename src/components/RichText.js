import { createEditor, Editor, Transforms } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { useMemo, useCallback } from "react";

const CodeElement = props => {
	return (
		<pre {...props.attributes}>
			<code>{props.children}</code>
		</pre>
	);
}

const DefaultElement = props => {
	return (
		<p {...props.attributes}>{props.children}</p>
	);
}

const RichText = ({ data, setData }) => {
	const editor = useMemo(() => withReact(createEditor()), []);

	const renderElement = useCallback(props => {
		switch (props.element.type) {
			case "code":
				return <CodeElement {...props} />
			default:
				return <DefaultElement {...props} />
		}
	});

	return (
		<Slate
			editor={editor}
			value={data.description}
			onChange={newValue => setData({ ...data, description: newValue})}
		>
			<Editable
				renderElement={renderElement}
				onKeyDown={event => {
					if (event.key === 'a' && event.ctrlKey) {
						event.preventDefault();
						Transforms.setNodes(
							editor,
							{ type: "code" },
							{ match: n => Editor.isBlock(editor, n)}
						)
					}
				}}
			/>
		</Slate>
	);
}

export default RichText;


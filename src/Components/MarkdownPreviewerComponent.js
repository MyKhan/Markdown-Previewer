import { marked } from "marked";

const MarkdownPreviewer = (props) => {
    return (
        <div>
            <p
                id="preview"
            >
                {marked.parse(props.input)}
            </p>
        </div>
    );
}

export default MarkdownPreviewer;
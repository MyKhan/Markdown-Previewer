import { marked } from "marked";

marked.setOptions({
    breaks: true
})

const MarkdownPreviewer = (props) => {
    return (
        <div 
            id="preview" 
            dangerouslySetInnerHTML={{
                __html: marked (props.text)
            }}
        >
        </div>
    );
}

export default MarkdownPreviewer;
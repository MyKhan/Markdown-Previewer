const MarkdownEditor = (props) => {
    return (
        <div>
            <textarea
                id="editor"
                className="form-control"
                value={props.input}
                onChange={props.handler}
            >
            </textarea>
        </div>
    );
}

export default MarkdownEditor;
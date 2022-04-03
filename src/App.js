import { useState } from 'react';
import './App.css';
import MarkdownEditor from './Components/MarkdownEditorComponent';
import MarkdownPreviewer from './Components/MarkdownPreviewerComponent';

function App() {
  const [input, setInput] = useState(`
  # H1
  ## H2
  ### H3
  [title](https:www.google.com)
  \`code\`
  \`\`\`
  {
    "firstName": "Johgn"
  }
  \`\`\`

  - First
  - Second

  > blockquote

  ![alt text](image.jpg)

  **bold text**
  `);

  const onKeyPress = (e) => {
    setInput(e.target.value);
  }

  return (
    <div className="App">
      <div className="container">
        <div className='row'>
          <div className='col'>
            <h1 className='title'>Markdown Editor</h1>
            <MarkdownEditor input = {input} handler = {onKeyPress} />
          </div>
          <div className='col'>
            <h1 className='title'>Markdown Previewer</h1>
            <MarkdownPreviewer text = {input} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

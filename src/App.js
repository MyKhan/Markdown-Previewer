import { useState } from 'react';
import './App.css';
import MarkdownEditor from './Components/MarkdownEditorComponent';
import MarkdownPreviewer from './Components/MarkdownPreviewerComponent';

function App() {
  const [input, setInput] = useState('');

  const onKeyPress = (e) => {
    setInput(e.target.value);
  }

  return (
    <div className="App">
      <div className="container">
        <div className='row'>
          <div className='col'>
            <h1>Markdown Editor</h1>
            <MarkdownEditor input = {input} handler = {onKeyPress} />
          </div>
          <div className='col'>
            <h1>Markdown Previewer</h1>
            <MarkdownPreviewer input = {input} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

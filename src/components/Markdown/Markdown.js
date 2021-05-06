import React, { useState} from 'react';
import './Markdown.css';
import ReactMarkdown from 'react-markdown';

export default function App() {
  const [markdown, setMarkdown] = useState('# hello'); 

  function handleChange(e) {
    setMarkdown(e.target.value);
  }

  return (
    <div className="app">
        <textarea onChange={handleChange} value={markdown}/>
        <ReactMarkdown className="preview" source={markdown}></ReactMarkdown>
        {/* <ReactMarkdown className="preview" source={markdown}/> */}
    </div>
  );
}
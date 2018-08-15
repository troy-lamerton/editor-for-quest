import * as React from 'react';
import './App.css';

import Markdown from 'react-remarkable';
import CodeEditor from './components/code_editor';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src="https://i.imgur.com/BUsNsOS.png"
            className="App-logo"
            alt="logo"
          />
        </header>
        <CodeEditor />
        <Markdown
          source="# readme 
          please read all"
        />
      </div>
    );
  }
}

export default App;

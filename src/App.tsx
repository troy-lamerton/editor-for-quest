import * as React from 'react';
import './App.css';

import CodeEditor from './components/code_editor';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src="https://i.imgur.com/4Cucppn.png"
            className="App-logo"
            alt="logo"
          />
        </header>
        <CodeEditor />
      </div>
    );
  }
}

export default App;

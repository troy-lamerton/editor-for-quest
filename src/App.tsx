import * as React from 'react';
import './App.css';

import { getReadme } from './api/requests';

import Markdown from 'react-remarkable';
import CodeEditor from './components/code_editor';

interface IState {
  readme: string;
}
class App extends React.Component<{}, IState> {
  constructor() {
    super({});

    this.state = {
      readme: '',
    };
  }
  public componentDidMount() {
    /*tslint:disable*/
    getReadme().then((str: string) => this.setState({ readme: str }));
    /*tslint:enable*/
  }
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
        <Markdown source={this.state.readme} container="article" />
      </div>
    );
  }
}

export default App;

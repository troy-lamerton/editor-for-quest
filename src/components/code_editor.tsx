import * as React from 'react';
import * as YAML from 'yamljs';
import Button from './button';
import InputField from './input_field';
import Textarea from './textarea';

import { postData } from '../api/requests';

export default class CodeEditor extends React.PureComponent<
  object,
  {
    code: string;
    name: string;
    uploadDone?: boolean;
    uploading?: boolean;
  }
> {
  constructor() {
    super({});

    this.state = {
      code: EXAMPLE_QUESTER_CODE,
      name: "Troy's Vampire Slayer",
    };
  }
  public render() {
    return (
      <div className="container" style={{ maxWidth: 600 }}>
        <div style={{ marginBottom: 12 }}>
          <div className="row" style={{ marginBottom: 6 }}>
            <InputField
              title="Name"
              onChange={this.nameChange}
              value={this.state.name}
            />
          </div>
          <div className="row">
            <Textarea value={this.state.code} onChange={this.change} />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <Button type="warning" onClick={this.clearEditor}>
              Clear
            </Button>
          </div>
          <div className="col-6">
            <Button
              disabled={this.state.uploading}
              type="primary"
              onClick={this.uploadQuester}
            >
              Upload
            </Button>
          </div>
        </div>
      </div>
    );
  }

  private nameChange = (name: string) => {
    this.setState({ name });
  };
  private clearEditor = () => {
    this.setState({ code: '' });
  };

  private uploadQuester = () => {
    this.setState({ uploading: true });
    const steps = YAML.parse(this.state.code);
    /* tslint:disable*/
    const name = this.state.name.replace(/\./g, '');
    postData(`/${name}`, {
      author: 'TODO:usesmthn',
      created_at: new Date().toISOString(),
      steps,
    }).then(data => {
      this.setState({ uploadDone: true, uploading: false });
    });
  };

  private change = (code: string) => {
    this.setState({
      code,
    });
  };
}

const EXAMPLE_QUESTER_CODE = `# Vampire slayer
- Walk: Vampire Slayer
- Talk: Morgan, 2
- Climb: up
- Expect: Garlic
  Search: Cupboard
- Climb: down
- Walk: Blue Moon Inn`;

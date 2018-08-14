import * as React from 'react';
import sillyname from 'sillyname';
import Button from './button';
import InputField from './input_field';
import PublishButton from './publish_button';
import Textarea from './textarea';

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
      name: sillyname(),
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
            <PublishButton
              type="primary"
              solverId={this.state.name}
              data={this.state.code}
            />
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

  private change = (code: string) => {
    this.setState({
      code,
    });
  };
}

const EXAMPLE_QUESTER_CODE = `# Draynor village example
- Walk: Draynor Village
- Bank:
    deposit: inventory
    withdraw:
      - "* rune, 2"
- Walk: Vampire Slayer
- Climb: up
- Search: Cupboard
  Expect: Garlic
- Climb: down
- Bank:
    deposit: everything
- Interact: Chop down on Tree`;

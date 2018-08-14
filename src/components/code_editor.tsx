import * as React from 'react';
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
            <PublishButton
              type="primary"
              solverId={this.state.name.replace(/[.@%:\/\\]/g, '')}
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

const EXAMPLE_QUESTER_CODE = `# Vampire slayer
- Walk: Vampire Slayer
- Talk: Morgan, 2
- Climb: up
- Expect: Garlic
  Search: Cupboard
- Climb: down
- Walk: Blue Moon Inn`;

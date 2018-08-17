import * as React from 'react';
import { connect } from 'react-redux';
import sillyname from 'sillyname';
import * as yaml from 'yamljs';
import { IState } from '../types';

import Button from './button';
import InputField from './input_field';
import PublishButton from './publish_button';
import Textarea from './textarea';

interface IProps {
  steps: any[];
}
class CodeEditor extends React.PureComponent<
  IProps,
  {
    code: string;
    name: string;
    uploadDone?: boolean;
    uploading?: boolean;
  }
> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      code: EXAMPLE_QUESTER_CODE,
      name: sillyname(),
    };
  }

  public componentWillReceiveProps(np: IProps) {
    if (np.steps) {
      // tslint:disable-next-line
      console.log();
      this.setState({
        code: yaml.stringify(np.steps, 3, 2).replace(/-\n  /g, '- '),
      });
    }
  }

  public render() {
    return (
      <div>
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

export default connect((state: IState) => {
  return {
    steps: state.quest.steps,
  };
})(CodeEditor);

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

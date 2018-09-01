import * as React from 'react';

export default class InputField extends React.PureComponent<{
  value: string;
  onChange: (t: string) => void;
  title: string;
}> {
  public render() {
    return (
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">{this.props.title}</span>
        </div>
        <input
          className="form-control"
          onChange={this.change}
          type="text"
          value={this.props.value}
        />
      </div>
    );
  }

  private change = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(e.currentTarget.value);
  };
}

import * as React from 'react';

export default class CodeEditor extends React.PureComponent<{
  value: string;
  onChange: (t: string) => void;
}> {
  public render() {
    return (
      <textarea
        className="form-control"
        onChange={this.change}
        style={{
          font: 'bold 18px Monaco',
          height: 400,
          lineHeight: '21px',
          maxHeight: 500,
        }}
        value={this.props.value}
      />
    );
  }

  private change = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.props.onChange(e.currentTarget.value);
  };
}

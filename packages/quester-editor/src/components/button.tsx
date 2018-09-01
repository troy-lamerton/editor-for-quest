import * as React from 'react';

export default class Button extends React.PureComponent<{
  onClick: () => void;
  type: 'warning' | 'primary' | 'danger';
  disabled?: boolean;
}> {
  public render() {
    return (
      <button
        className={'btn btn-' + this.props.type}
        onClick={this.props.onClick}
        type="button"
        disabled={this.props.disabled}
      >
        {this.props.children}
      </button>
    );
  }
}

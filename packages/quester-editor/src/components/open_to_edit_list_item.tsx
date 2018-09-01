import * as React from 'react';
import { ICommunityQuester } from '../types';
import './open_to_edit_list_item.css';

export default class QuesterListItem extends React.Component<{
  quester: ICommunityQuester;
  onClick: (steps: any[]) => void;
}> {
  public render() {
    const { quester } = this.props;
    return (
      <div className="list-item" onClick={this.onClick} key={quester.id}>
        {quester.name}
      </div>
    );
  }
  private onClick = () => {
    this.props.onClick(this.props.quester.steps);
  };
}

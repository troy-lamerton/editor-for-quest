import { get } from 'lodash';
import * as React from 'react';
import { connect } from 'react-redux';
import { firebaseConnect, isLoaded } from 'react-redux-firebase';
import { compose } from 'redux';
import { openForEdit } from '../store/actions';
import { ICommunityQuester, IState } from '../types';
import QuesterListItem from './open_to_edit_list_item';

class OpenToEditList extends React.Component<{
  cQuesters: { [id: string]: ICommunityQuester };
  openForEdit: typeof openForEdit;
}> {
  public render() {
    const { cQuesters } = this.props;
    if (!cQuesters || !isLoaded(cQuesters)) {
      return 'Loading questers...';
    }
    return (
      <aside style={{ overflowY: 'auto', overflowX: 'hidden', height: 444 }}>
        <p>Opening a quester will CLEAR everything</p>
        {Object.keys(cQuesters)
          .map(id => cQuesters[id])
          .map(quester => (
            <QuesterListItem
              key={quester.id}
              onClick={this.openInEditor}
              quester={quester}
            />
          ))}
      </aside>
    );
  }

  private openInEditor = (steps: any[]) => {
    this.props.openForEdit(steps);
  };
}

export default compose(
  firebaseConnect([
    'quests/solvers_community', // { path: '/todos' } // object notation
  ]),
  connect(
    (state: IState) => {
      //tslint:disable
      return {
        cQuesters: get(state.firebase, 'data.quests.solvers_community'),
        // profile: state.firebase.profile // load profile
      };
    },
    { openForEdit },
  ),
)(OpenToEditList) as React.ComponentClass;

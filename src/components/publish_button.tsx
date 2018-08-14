import * as React from 'react';
import { withFirebase } from 'react-redux-firebase';
import * as yaml from 'yamljs';
import Button from './button';

class PublishButton extends React.PureComponent<{
  type: 'warning' | 'primary' | 'danger';
  disabled?: boolean;
  data: any;
  firebase: any;
  solverId: string;
}> {
  public render() {
    return (
      <Button {...this.props} onClick={this.publish}>
        Publish
      </Button>
    );
  }

  private publish = () => {
    const steps = yaml.parse(this.props.data);
    const savePath = '/quests/solvers_community/' + this.props.solverId;

    /*tslint:disable*/
    this.props.firebase
      .database()
      .ref(savePath)
      .once('value')
      .then((snapshot: any) => {
        let canContinue = true;
        if (snapshot.hasChild('/')) {
          canContinue = confirm(
            'A solver already exists with that name. Do you want to replace it?',
          );
        }
        if (canContinue) {
          this.props.firebase.set(savePath, {
            steps,
            name: this.props.solverId,
            created_at: new Date().toISOString(),
            author: 'Anonymous',
          });
          alert(this.props.solverId + ' has been published!');
        }
      })
      .catch((e: Error) => {
        /*tslint:disable-next-line*/
        console.error(e);
        alert(
          'There was a problem publishing your solver. Try again in a moment.',
        );
      });
  };
}

export default withFirebase(PublishButton);

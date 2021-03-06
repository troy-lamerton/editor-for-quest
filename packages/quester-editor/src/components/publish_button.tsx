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
    let steps: string = '';
    try {
      steps = yaml.parse(this.props.data);
    } catch (e) {
      alert('There is a problem on line ' + e.parsedLine + '\n\n' + e.message);
      // tslint:disable-next-line
      console.error(e);
      return;
    }
    const solverIdSantized = this.props.solverId.replace(/[.@%:\/\\]/g, '');
    const savePath = '/quests/solvers_community/' + solverIdSantized;

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
            id: solverIdSantized,
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

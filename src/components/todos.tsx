import * as React from 'react';
import { withFirebase } from 'react-redux-firebase';

const Todos = ({ firebase }: { firebase: any }) => {
  const sampleTodo = { text: 'big Sample', done: false };
  const pushSample = () => firebase.set('/test/bigtodo', sampleTodo);
  return (
    <div>
      <h1>Todos</h1>
      <ul>
        <li> todo stuff</li>
      </ul>
      <input type="text" />
      <button onClick={pushSample}>Add it</button>
    </div>
  );
};

export default withFirebase(Todos);
// or firebaseConnect()(Todos)

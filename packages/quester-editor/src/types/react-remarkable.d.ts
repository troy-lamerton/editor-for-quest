declare module 'react-remarkable' {
  // USAGE: <Markdown type="type" label="label" /> => <button type="type">label</button>
  import * as React from 'react';

  // so we make props an interface
  export interface IMarkdownProps {
    source?: string; // and redefine it here again
    container?: string; // and redefine it here again
  }

  export class Markdown extends React.Component<IMarkdownProps> {}

  export default Markdown;
}

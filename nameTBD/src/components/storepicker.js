import React from 'react';
// import ReactDom from 'react-dom';
// no need to import all of ReactDom package, just select render method
import { render } from 'react-dom';

class StorePicker extends React.Component {
  // constructor() {

  // }

  render(){
    return <h2>Hello</h2>
  }
}

render(<StorePicker/>, document.getElementById('main'))
// ReactDom.render()
// no longer needed as we didn't import all of ReactDom

export

import React from 'react';
// import ReactDom from 'react-dom';
// no need to import all of ReactDom package, just select render method
import { render } from 'react-dom';

class StorePicker extends React.Component {
  // constructor() {

  // }

  render() {
    return (<form className="store-selector">
      { /* Hello */ }
      <h2>Please Enter A Store</h2>
      <input type='text' placeholder='Store Name'/>
      <button type='submit'>Vist Store →</button>
    </form>
    )
  }
}

export default StorePicker;

// comments should not be put at the top level of the return statement
// either put them above or inside the return element

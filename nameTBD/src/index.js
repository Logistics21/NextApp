import React from 'react';
import { render } from 'react-dom';

import './css/style.css';
// webpack imports the styles CSS file for you
// you could also place this in the index html
import App from './components/App';
// import StorePicker from './components/storePicker';


render(<App/>, document.getElementById('main'))
// ReactDom.render()
// no longer needed as we didn't import all of ReactDom

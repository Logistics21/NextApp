import React from 'react';
import Header from './header';
import Order from './order';
import Inventory from './inventory';

const App = () => (
  <div className='body-container'>
    <div className='menu'>
      <Header tagline="Fresh SeaFood" />
    </div>
      <Order />
      <Inventory />
  </div>
)

export default App;

import React from 'react';
import MyRouter from './router/index';
import Navbar from '../src/navbar/Navbar';


function App() {
  return (
    <div>
      <Navbar />

      <MyRouter />
    </div>
  )
}

export default App;

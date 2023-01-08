import React from 'react';
import './App.css';
import Header from './Header';
// import MemeImage from './MemeImage';
import MemeBuilder from './memeBuilder';

function App() {

  return (
    <div>
      <Header />
      <div className='app-container'>
      <MemeBuilder />
      {/* <MemeImage /> */}
      </div>
    </div>
  )
}

export default App
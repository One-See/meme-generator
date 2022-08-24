import React from 'react';
import './App.css';
import Memeform from './components/MemeForm/Memeform';
import Nav from './components/Nav bar/Nav';

function App() {
  return (
    <React.StrictMode>
      <div className="whole-content">
        <Nav />
        <Memeform />
      </div>
    </React.StrictMode>
  );
}

export default App;

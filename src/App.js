import React from 'react';
import { Counter } from './features/Counter';
import './App.css';
import Sidebar from './components/Sidebar'
import Chat from './components/Chat';

function App() {
  return (
    // BEM naming convention
    <div className="app">
      {/* Sidebar */}
      <Sidebar />

      {/* Chat */}
      {/* <Chat /> */}
      <Chat />
    </div>
  );
}

export default App;

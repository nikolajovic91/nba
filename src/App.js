import React from 'react';
import './App.css';
import Header from './components/Header'
import Teams from "./components/Teams";
import { TeamProvider } from './Context';

function App() {
  return (
    <TeamProvider>
      <div>
        <Header />
        <Teams />
      </div>
    </TeamProvider>
  );
}

export default App;

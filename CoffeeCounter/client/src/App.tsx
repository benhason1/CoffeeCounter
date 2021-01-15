import { Button } from '@material-ui/core';
import React from 'react';
import './App.css';
import { CreateUser } from './components/CreateUser';
import Users from './components/Users';
import { resetAllCoffeeGrams } from './services/mongo';

function App() {
  return (
    <div className="App">
      <CreateUser />
      <Users />
      <Button onClick={resetAllCoffeeGrams}>reset all</Button>
    </div>
  );
}

export default App;

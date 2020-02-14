import React, { useState } from 'react';
import './App.css';
import Tweet from './Tweet';

function App() {
  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);
  // const [user, setUser] = useState({
  //   name: 'Ferd',
  //   surname: 'Yuska',
  //   age: 25,
  //   posts: ['mi first post', 'my very big status', 'salama kelle paca']
  // });

  const plussCount = () => {
    setCount(count + 1);
  };
  const minusCount = () => {
    setCount(count - 1);
  };
  const changeColor = () => {
    setRed(!isRed);
  };
  return (
    <div className='App'>
      <h1 className={isRed ? 'red' : 'blue'}>Change my color</h1>
      <button onClick={changeColor}>Change color</button>
      <button onClick={plussCount}>Pluss</button>
      <h1>{count}</h1>
      <button onClick={minusCount}>Minus</button>
    </div>
  );
}

export default App;

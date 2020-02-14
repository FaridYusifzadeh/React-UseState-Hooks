import React, { useState } from 'react';
import './App.css';
import Tweet from './Tweet';

function App() {
  // const [isRed, setRed] = useState(false);
  // const [count, setCount] = useState(0);
  // const [user, setUser] = useState({
  //   name: 'Ferd',
  //   surname: 'Yuska',
  //   age: 25,
  //   posts: ['mi first post', 'my very big status', 'test test test']
  // });

  // const plussCount = () => {
  //   setCount(count + 1);
  // };
  // const minusCount = () => {
  //   setCount(count - 1);
  // };
  // const changeColor = () => {
  //   setRed(!isRed);
  // };

  const [users, setUsers] = useState([
    {name:'Farid', message:'Hello Iam Farid'},
    {name:'Sebuhi',message:'Hello Iam Sebuhi'},
    {name:'Tural',message:'Hello Iam Tural'}
  ])
  return (
    <div className='App'>
      {/* <h1 className={isRed ? 'red' : 'blue'}>Change my color</h1>
      <button onClick={changeColor}>Change color</button>
      <button onClick={plussCount}>Pluss</button>
      <h1>{count}</h1>
      <button onClick={minusCount}>Minus</button> */}
      {users.map((data,index)=>(
        <Tweet key={index} name={data.name} message={data.message} />
      ))}
    </div>
  );
}

export default App;

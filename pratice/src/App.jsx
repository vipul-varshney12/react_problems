
import './App.css'
import Eleven from './Eleven'
import Forteen14 from './Forteen14'
import Nine from './Nine'
import Ten from './Ten'
import Thirteen13 from './Thirteen13'
import Twelve from './Twelve'
//import Eight from './Eight'
//import Seven from './Seven'
//import Five from './Five'
//import Six from './Six'
//import Four from './Four'
//import Three from './Three'
//import Two from './Two'

function App() {
  //const [count, setCount] = useState(0)
//https://jsonplaceholder.typicode.com/posts/1
const  items=['item1','item2','another item'];

  return (
    <>
   <Forteen14 items={items} />
    </>
  )
}

export default App
/*


import React, { useState, useEffect } from 'react';

const App = () => {
  const [message, setMessage] = useState('Hi there, how are you?');

  useEffect(() => {
    console.log('trigger use effect hook');

    setTimeout(() => {
      setMessage("I'm fine, thanks for asking.");
    }, 3000)
  })

  return <h1>{message}</h1>
};

export default App;
 */

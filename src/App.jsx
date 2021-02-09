import React, { useState } from 'react';
import {msg} from './Greeting';
import './index.css';


function App(){

  const time = new Date().toLocaleTimeString();
  const [currentTime, setTime] = useState(time);

  const updateTime = ( time ) => {
    time = new Date().toLocaleTimeString();
    setTime(time);
  }
  setInterval(updateTime, 1000);

  return (
    <div className="body">
      <div className="clock-body">
        <h1>Hello Hooligan !</h1>
        <h1>Good {msg}</h1>
        <h1>{currentTime}</h1>
      </div>
    </div>
  );
}

export default App;
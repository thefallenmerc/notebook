import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';

const App = () => {
  const [userData, setUserData] = useState([]);

  useEffect(_ => {
    fetch('http://localhost:1000/some/address')
      .then(response => response.json())
      .then(data => {
        setUserData(data);
      })
    const socket = socketIOClient('http://localhost:1000');
    socket.on('message', message => {
      console.log(message);
    })
  }, []);

  return (
    <div>
      {
        JSON.stringify(userData)
      }
    </div>
  );
}

export default App;
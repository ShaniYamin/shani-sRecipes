import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HomePage() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/home/')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Shani's Recipes</h1>
      <p>{message}</p>
      <p>Enjoy Your Time</p>
    </div>
  );
}

export default HomePage;
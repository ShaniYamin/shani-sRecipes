import React, { useState, useEffect } from 'react';
import axios from 'axios';
import backgroundVideo from '../assets/BG.mp4'

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
    <div className='main'>
      <div className='overlay'>
        <video src={backgroundVideo} autoPlay loop muted></video>
        <div className='content'>
          <h1 style={{color:'#4169E1',}}>My Passion is Delicious Food</h1>
          <p>Hey <br/>
            My name is Shani, I graduated with a bachelor's degree in computer science. <br/>
            Looking to learn and expand my knowledge in the field of software development mainly in the backend. <br/>
            I am neither a chef nor a confectioner, but someone who knows how to prepare delicious food 🙂 <br/>
            I acquired most of my knowledge mainly from experience in the kitchen and I'm still learning, all the time. <br/>
            I like to improvise and surprise (sometimes even myself). <br/>
            Hope you enjoy the site and learn that to prepare delicious food you don't have to work hard.
            </p>
        </div>
      </div>
    </div> 
  );
}

export default HomePage;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import backgroundVideo from '../assets/BG.mp4'

function HomePage() {
  const [message, setMessage] = useState('');
  const handleOpenCV=()=>{
    const url = 'https://drive.google.com/file/d/1r_6Y3BvHEUGoKXorb9wfh4cl4kY3pEgw/view';
    window.open(url, '_blank');
  }
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/home/')
      .then(response => {
        setMessage(response.data.message);
        // console.log(message);
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
          <p>Hey, I am Shani Yamin <br/>
          As a Computer Science graduate with a demonstrated track record, I secured the top position at the SafeWeb Hackathon,<br/> 
          showcasing my expertise in full stack development E2E.<br/>
          Currently serving as a coordinator at ColmanDevClub, I actively contribute to fostering innovation within the tech community.<br/>
          Passionate about mentorship, particularly empowering young girls in technology, <br/>
          I am now eager to channel my skills into a dynamic role as a Software Engineer.
            </p>
            <div><button className='btn btn-outline-dark' onClick={handleOpenCV}>Go to CV</button></div>
            {console.log(message)}
        </div>
      </div>
    </div> 
  );
}

export default HomePage;
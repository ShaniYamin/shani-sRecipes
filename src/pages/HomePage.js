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
          <h3>Hey, I am Shani Yamin</h3>
          <p>With a passion for technology as an MSc student in Computer Science at Reichman University, <br/>
          I am highly organized and detail-oriented. <br/>
          Winning the SafeWeb Hackathon showcased my quick learning ability. <br/>
          As a cooking enthusiast and autodidact, <br/>I am currently learning backend development and creating an E2E RecipesHub website, 
          <br/>highlighting my expertise in backend development.<br/>
          I served in C4I Corps as a network technician and team leader, <br/>
          utilizing my mentorship and communication skills effectively. <br/>
          Now, I am eager to continue learning and apply my skills in a dynamic role as a <b>Software Engineer</b>.
            </p>
            <div><button className='btn btn-outline-dark' onClick={handleOpenCV}>Go to CV</button></div>
            {console.log(message)}
        </div>
      </div>
    </div> 
  );
}

export default HomePage;
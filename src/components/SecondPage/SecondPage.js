import React from 'react';
import '../SecondPage/SecondPage.css' 
import Header from '../Header/Header'; 
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer'; 

/* https://www.youtube.com/watch?v=Fi3_BjVzpqk without v= */

function SecondPage() {
  return ( 
    <div>
        {<Header />}
        {<NavBar />} 
        <div className="content"> 
            <p>Second Page Content</p> 
            <p>Video</p> 
            <div className='video-container'>
              <iframe
                className="introductionVideo"
                src="https://www.youtube.com/embed/Fi3_BjVzpqk?autoplay=1&mute=1&controls=1"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Introduction Video"
              ></iframe>
            </div>
            <p>Slider</p> 
            <p>elements appear</p>
        </div> 
        
        {<Footer />}
      
    </div>
  );
}

export default SecondPage;
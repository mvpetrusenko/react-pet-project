import React, { useState, useEffect, useRef} from 'react';
import '../SecondPage/SecondPage.css' 
import { motion } from 'framer-motion'; 
import winter from '../../assets/images/winter.jpg'; 
import spring from '../../assets/images/spring.jpg'; 
import summer from '../../assets/images/summer.jpg'; 
import autumn from '../../assets/images/autumn.jpg'; 
import bigben from '../../assets/images/big-ben.jpg'; 



function SecondPage() { 


  const [showFirstElement, setShowFirstElement] = useState(false); 
  const [showSecondElement, setShowSecondElement] = useState(false); 


  useEffect(() => {
    
    const timer1 = setTimeout(() => {
      setShowFirstElement(true);
    }, 20000); 

    const timer2 = setTimeout(() => {
      setShowSecondElement(true);
    }, 30000); 


    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []); 



      const popupformRef = useRef(null) 

      const openPopup = () => {
        popupformRef.current.style.display = 'block';
      } 

      const closePopup = () => {
        popupformRef.current.style.display = 'none';
      }



const imagesSlides = [winter, spring, summer, autumn] 


const [imageIndex, setImageIndex] = useState(0) 

const arrayLength = imagesSlides.length;

const handleNextButton = () => {
  setImageIndex(index => {
    if(index === arrayLength - 1) return 0
    return index + 1
  })


}


const handlePreviousButton = () => {
  setImageIndex(index => {
    if(index === 0) return arrayLength - 1 
    return index - 1
  })

}



  return ( 
    <div>
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
            
            <div className='main-container'> 
              <a className='previous' onClick={handlePreviousButton}>&#10094;</a> 
              
              <div className='slider-container'>

                <div className='slideItem'> 
                  <img src={imagesSlides[imageIndex]}></img>
                </div> 

                </div> 
                <a className='next' onClick={handleNextButton}>&#10095;</a>
            </div> 

              <div className='navigationDots'>
              {imagesSlides.map((_, index) => (
                <button className='dot' onClick={() => setImageIndex(index)}>{index + 1}</button>))}
              </div> 

              
              <p>Just hover the photo</p> 
              <div className='imageOverlayContainer'>
                <img src={bigben} 
                     className='imageToHover'
                     alt='big-ben' 
                     style={{width: '500px', margin: '30px'}}>
                </img> 
                <div className='overlayTitle'>Big Ben (London)</div>
              </div>


            <p>elements to appear</p> 
              <div className="elementsToAppear">
                <motion.div
                  initial={{opacity: 0, y: 50}} 
                  whileInView={{opacity: 1, transition: {delay: 0.2, duration: 0.4}}}
                  viewport={{once: false, amount: .4}} 
                  className='textToAppear'>
                    <p style={{ textAlign: 'center' }}>Element text to appear on scroll</p>
                

                    {showFirstElement ? <div className="firstToAppear">Yellow block</div> : null}
                    {showSecondElement ? <div className="secondToAppear">Green block</div> : null}
                </motion.div> 

        </div>


        <div className='popup'>
            <p>popup</p> 

            <button id='openPopUp' className='openPopupChat' onClick={openPopup}>Click to open Popup chat</button> 
            
            <div ref={popupformRef} className='popupForm'>
                <form className='formPopupContainer'>
                  <p>Form opened</p> 
                  <p>Write something to chat</p>
                  <button type='button' className='closeButton' onClick={closePopup}>Close</button>
                </form>
            </div>
        </div>
      </div> 
  </div>
  );
}

export default SecondPage;
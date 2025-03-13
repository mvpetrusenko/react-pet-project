import React, { useState, useEffect, useRef} from 'react';
import '../SecondPage/SecondPage.css' 
import { motion } from 'framer-motion'; 
import winter from '../../assets/images/winter.jpg'; 
import spring from '../../assets/images/spring.jpg'; 
import summer from '../../assets/images/summer.jpg'; 
import autumn from '../../assets/images/autumn.jpg'; 
import bigben from '../../assets/images/big-ben.jpg'; 
import { width } from '@fortawesome/free-solid-svg-icons/fa0';

// import Header from '../Header/Header'; 
// import NavBar from '../NavBar/NavBar';
// import Footer from '../Footer/Footer'; 

/* https://www.youtube.com/watch?v=Fi3_BjVzpqk without v= */ 

//Element to appear after some time:

  // const [isHide, setIsHide] = useState(true);
  // setTimeout(() => setIsHide(false), 5000); 
  /* {!isHide ? <div>show after 5 seconds</div> : null} */
  

  // element to appear on scroll: 

  // import { motion } from 'framer-motion'; + 
  // install: npm install framer-motion
  /* 

    <motion.img 
           initial={{opacity: 0, y: 50}} - at the beginning not visible, y - to appear on vertical scroll
           whileInView={{opacity: 1, transition: {delay: 0.2, duration: 0.5}}} - on scroll appears
           viewport={{once: false, amount: 1}} once: false - several times appear if 
                                                we scroll down/up, amount: 1 - appears 100% 
                                                of an element, .5 - 50%
                                                transition to appear not very quick 

  */ 

// html symbol - arrow: &#8592;




function SecondPage() { 


   // setTimeOut with React 
  // useState (false) - at the beginning element is not visible 
  //showElement ? <div>Appears...</div> : null - apply function to the element

  const [showFirstElement, setShowFirstElement] = useState(false); 
  const [showSecondElement, setShowSecondElement] = useState(false); 


  // useEffect (() => {
  //   const timer = setTimeout(() => {
  //     setShowFirstElement(true); 
  //   }, 3000);
  //   return () => clearTimeout(timer);
  // }, []) 


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




   

  // window.open(url, name, params) 
  // params: width/height, left/top 
  // _blank	URL is loaded into a new window, or tab. This is the default 
  // _parent	URL is loaded into the parent frame 
  // _self	URL replaces the current page 
  // _top	URL replaces any framesets that may be loaded 
  // name	The name of the window (does not specify the title of the window) (optional)
    // display CSS property values: 
    // block - Element is rendered as a block-level element 
    // none - hide, element to not be displayed 
    // An inline element has floating content on its left and right side 
    // A block element fills the entire line, and nothing can be displayed on its left or right side 
    // display:none, it hides the entire element 
    // visibility:hidden means that the contents of the element will be invisible 

    // Do not use useEffect or other NOT CUSTOM hook inside React component 

    // document.getElementById("myForm").style.display = "block"; 

    // const [popup, setPopup] = useState('') 

    // const openPopup = (event) => { 


      // useEffect(() => {
      //   const openPopupButton = document.getElementById('popUpForm');
      //   openPopupButton.style.display = 'block';
      // }, []);  


      // Refs can access DOM nodes or React elements created in the 
      // render method. In contrast to the traditional getElementById method, 
      // refs in React are used in cases where you want to change 
      // the value of a child component without using props 

      const popupformRef = useRef(null) 

      const openPopup = () => {
        popupformRef.current.style.display = 'block';
      } 

      const closePopup = () => {
        popupformRef.current.style.display = 'none';
      }



  // } 

// JS: 
// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }



// if (index === 0) return imagesSlides.length - 1;:
// This if statement checks if the current imageIndex is 0 (i.e., the first image).
// If it is, it returns imagesSlides.length - 1. This effectively wraps the index 
// around to the last image in the imagesSlides array, creating a circular navigation effect.
// return index - 1;:
// If the current imageIndex is not 0, this line is executed.
// It returns index - 1, which decrements the imageIndex by 1, moving to the previous image.
// In simpler terms:

// When the "previous" button is clicked, this function checks if the user is currently on the first image.
// If they are, it jumps to the last image.
// Otherwise, it simply goes to the image before the current one 

// imagesSlides.length = 4 (elements)

const imagesSlides = [winter, spring, summer, autumn] 


const [imageIndex, setImageIndex] = useState(0) 

const arrayLength = imagesSlides.length;

// const handleNextButton = (imagesSlides) => {
const handleNextButton = () => {
  // console.log(imagesSlides) 
  setImageIndex(index => {
    // if(index === imagesSlides.length - 1) return 0 - it does not work without separate arrayLength variable
    if(index === arrayLength - 1) return 0
    return index + 1
  })


}

// const handlePreviousButton = (imagesSlides) => { 
const handlePreviousButton = () => {
  setImageIndex(index => {
    // if(index === 0) return 3 - it works
    // if(index === 0) return imagesSlides.length - 1 
    if(index === 0) return arrayLength - 1 
    return index - 1
  })

}


  




  return ( 
    <div>
        {/* {<Header />}
        {<NavBar />}  */}
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
                  {/* imagesSlides[imageIndex] = itemArray[0] - the first element of array (winter) */}
                  <img src={imagesSlides[imageIndex]}></img>
                  {/* <div className='slideText'>Spring</div> */}
                </div> 
            
                {/* <div className='slideItem'>
                  <img src={winter} alt='winter'></img>
                  <div className='slideText'>Winter</div>
                </div> 

                <div className='slideItem'>
                  <img src={spring} alt='spring'></img>
                  <div className='slideText'>Spring</div>
                </div> 

                <div className='slideItem'>
                  <img src={summer} alt='summer'></img>
                  <div className='slideText'>Summer</div>
                </div> 

                <div className='slideItem'>
                  <img src={autumn} alt='autumn'></img>
                  <div className='slideText'>Autumn</div>
                </div>  */}

                

                </div> 
                <a className='next' onClick={handleNextButton}>&#10095;</a>
            </div> 
            {/* &#10095 - html entity lookup OR in unicode character tables */}
                {/* <a className='previous'>&#10094;</a> */}
                {/* <a className='next'>&#10095;</a> */}
              


              <div className='navigationDots'>
              {imagesSlides.map((_, index) => (
                // {index} - number on dot (0, 1, 2, 3)
                <button className='dot' onClick={() => setImageIndex(index)}>{index + 1}</button>))}
                {/* <span className='dot' onclick="currentSlide(2)"></span>
                <span className='dot' onclick="currentSlide(3)"></span>
                <span className='dot' onclick="currentSlide(4)"></span> */}
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
            {/* <button id='openPopUp' className='openPopupChat '>Click to open Popup chat</button>  */} 

            {/* openPopupCHat button after click is replaced by popupForm 
            button open has the same width/height as button Close */}

            <button id='openPopUp' className='openPopupChat' onClick={openPopup}>Click to open Popup chat</button> 
            
            {/* we link ref instead of getElementById to popupForm and onclick of button openPopupChat form opens */}
            <div ref={popupformRef} className='popupForm'>
                <form className='formPopupContainer'>
                  <p>Form opened</p> 
                  <p>Write something to chat</p>
                  <button type='button' className='closeButton' onClick={closePopup}>Close</button>
                </form>
            </div>
        </div>




        </div> 
        
        {/* {<Footer />} */}
      
    </div>
  );
}

export default SecondPage;
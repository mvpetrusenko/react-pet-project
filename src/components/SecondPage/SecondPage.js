import React, { useState, useEffect, useRef} from 'react';
import '../SecondPage/SecondPage.css' 
import { motion } from 'framer-motion';

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
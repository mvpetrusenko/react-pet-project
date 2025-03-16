import React, { useState } from 'react';
import '../MainPage/MainPage.css' 
import { Link } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';
// import Header from '../Header/Header'; 
// import NavBar from '../NavBar/NavBar';
// import Footer from '../Footer/Footer'; 
// import apple from '../../assets/images/apple.jpg'; 
// import grapes from '../../assets/images/grapes.jpg'; 
// import kiwi from '../../assets/images/kiwi.jpg'; 
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton'; 
import CardGroup from '../Card/CardGroup'; 
import CardData from '../Card/CardData'; 
import '../Card/Card.css'  

import { CartContext } from "../../App.js"; 
import { useContext } from 'react'; 



import { useForm } from "react-hook-form"  


import axios from 'axios'

// import {useHttp} from '../hooks/http.hook'




// details = cardArray 
// Card = CardGroup




//Regex for password validation: 

// Minimum eight characters, at least one letter and one number: 
// "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" 
// Minimum eight characters, at least one letter, one number and one special character: 
// "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$" 
// Minimum eight characters, at least one uppercase letter, one lowercase letter and one number: 
// "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$" 
// Minimum eight characters, at least one uppercase letter, 
// one lowercase letter, one number and one special character: 
// "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" 
// Minimum eight and maximum 10 characters, at least one uppercase letter, 
// one lowercase letter, one number and one special character: 
// "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$"


// function MainPage({ addToCart0 }) {  // Receive addToCart as a prop 

function MainPage() { 

  // const { loading, error, request } = useHttp() 

  // const registerHandler = async () => {
  //   try { 
  //     // function request with parameters: url... 
  //     // in routes/auth.routes.js in the backend project
  //     const data = await request('/api/auth/register', 'POST', {...form}) 
  //     console.log('Data', data)
  //   } catch (e) { 
  //     // catch will be empty, because it is in useHttp hook
  //   }

  // }


  // const [form, setForm] = useState({ 
  //     email: '', password: ''      
  //  }) 

  //  // ...form - spread data from form 
  //  // event.target.name - name will be email or password - className='email'
  //  const changeHandler = event => {
  //     setForm({ ...form, [event.target.name]: event. target.value })
  //  }





  



  // import axios from 'axios' 
  // <input type='submit' value={'To Backend'} onClick={handleExampleToBackendButton}></input> 

  // in backend project: import express, { response } from 'express'; 
  // import cors from 'cors'  
  // const app = express()  
  // app.use(express.json())  
  // app.use(cors()); 

//   app.get('/', (request, response) => {
//     response.send('Everything has been received');
// }) 


// app.listen(5000, (error) => {
//   if(error) {
//       return console.log('error')
//   } 
//   console.log('Server has been started')
// }); 

// axios.post (Frontend) 
// It's used to send an HTTP POST request to your backend API  
// It handles the client-side part of the request: packaging the data, setting headers, 
// and sending it to the server
// app.post (Backend) 
// This is a method provided by the Express.js framework in your backend code 
// It handles the server-side part of the request: receiving the data, processing it, 
// and sending a response back to the client
// The frontend initiates the request using axios.post 
// The backend listens for and responds to that request using app.post 
// use value when the fields are empty, but if we have to 
// type or update the value from the value already in the 
// input box. We must use defaultValue - cannot see input value while typing 
// I cannot see input values while typing in fields of my login form 
// The issue arises from combining React state (useState) and React 
// Hook Form (register method) on the same input fields. You should 
// choose one approach to control the input values 
// login function will not be working without first registration function
 


  const handleExampleToBackendButton = async () => {
    try {
      // event.preventDefault(); 
      await axios.get('http://localhost:5000').then(response => {
      console.log('backend works', response.data)
    }); 
    } catch (error) {
      console.log('testButton: ', error)
    }
    
  }





  // const [email, setEmail] = useState(''); 
  // const [password, setPassword] = useState(''); 

  const handleLoginButton = async (data) => {
    try {
      // event.preventDefault(); 
      const responseData = await axios.post('http://localhost:5000/login', {
        // email: email, - send email from state 
        // password: password, 
        email: data.emailLogin, 
        password: passwordLogin, 
      });  

      console.log('backend login works', responseData.data); 

    } catch (error) {
      console.log('login button error: ', error)
    }
    
  }




  const handleRegisterButton = async (data) => {
    try {
      // event.preventDefault(); 
      const responseD = await axios.post('http://localhost:5000/registration', {
        // email: email, - send email from state 
        // password: password, 
        firstName: data.firstName,
        email: data.email, 
        password: passwordRegistration, 
      });  

      console.log('backend registration works', responseD.data); 

    } catch (error) {
      console.log('register button error: ', error)
    }
    
  }










    const {cartItems, setCartItems} = useContext(CartContext); 
    
    // const context = useContext(CartContext); 

    const handleAddToCart = (product) => { 
        // alert('added');
        const updatedCart = [...cartItems, product]; // ...cartItems - existing items, product - new added product after click 
        
        setCartItems(updatedCart); 

        // set - key, value (return null) 
        // get - key - return value

        localStorage.setItem('cartItems', JSON.stringify(updatedCart)); 
        
        // but after page refresh added product disappear because not added to local storage
        
       
        // useAddToLocalStorage(updatedCart); // Save to localStorage
        
    }; 

 
    
      const useRedirectToCart = () => { 
        // alert('4444')
          const navigate = useNavigate(); 
          navigate("/cart"); 
      }



      //after filling in register fields and press 
      // register button nothing is send to backend, it simple go 
      // to my login form to fill in
      // const { 
      //   register, 
      //   watch, 
      //   handleSubmit, 
      //   getValues, 
      //   formState: { errors }} = useForm({mode: "onChange"} 
      //     ); 


      // Solution: Separate useForm Instances for Each Form
      // Create separate useForm hooks for the registration and login forms 
      // Use their respective handleSubmit functions independently

      // Separate useForm hooks for each form
      const { 
        register: registerRegisterForm,
        handleSubmit: handleRegisterSubmit, 
        formState: { errors: registerErrors },
  } = useForm(); 




  const {
    register: registerLoginForm,
    handleSubmit: handleLoginSubmit,
    formState: { errors: loginErrors },
  } = useForm();


    // showPassChecked - false = show password checkbox is not checked 
    // event.target.checked - not event.target.value (returns on) to check if checkbox is checked or not 
    // const checkedShow = event.target.checked (returns true) 

    // if checkbox show password is checked 
    // show the value of input type=password in Login form 
    // isVisible - true = checkbox show password is unchecked
    // setVisible(!isVisible) to true (!isVisible - to switch to checked) 


    // export default function ShowHidePassword({ name }) {
    //   const [isVisible, setVisible] = useState(false);
    
    //   const toggle = () => {
    //     setVisible(!isVisible);
    //   };
    
    //   return (
    //     <div className="form-group">
    //       <input type={!isVisible ? "password" : "text"} name={name} required />
    //       <span className="icon" onClick={toggle}>
    //         {isVisible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
    //       </span>
    //     </div>
    //   );
    // } 



    // !isVisible: This negates the current value of isVisible. 
    // If it's false, it becomes true, and vice versa
    // If !isVisible is true (meaning isVisible is false), the type is 
    // set to 'password', hiding the input.
    // If !isVisible is false (meaning isVisible is true), the type is 
    // set to 'text', showing the input.


    // Initially, isVisible is false, so the input field's type is 'password'.
    // When the checkbox is clicked, handleShowPasswordToggle is called.
    // handleShowPasswordToggle toggles the value of isVisible.
    // The input field's type is updated based on the new value of isVisible.
    // If isVisible is now true, the type becomes 'text', showing 
    // the password. If it's false, the type becomes 'password', hiding it. 


    // When you change the type attribute to 'text', you're telling the 
    // browser to treat the input field as a regular text input 
    // The browser will then display the input exactly as it was typed, without any masking 

    // In JS: 
    // function myFunction() {
    //   var x = document.getElementById("myInput");
    //   if (x.type === "password") {
    //     x.type = "text";
    //   } else {
    //     x.type = "password";
    //   }
    // }

    const [isVisible, setVisible] = useState(false)
    
    const handleShowPasswordToggle = () => { 
      setVisible(!isVisible)
  }
        

    



  return ( 
    <div>
        {/* {<Header />}
        {<NavBar />} */}




        <div className="content"> 

            {/* <div className='product-items'>
                <CardGroup cardArray={CardData} /> 
                
        </div>  */}


        {/* <CardGroup cardArray={CardData} addToCart={handleAddToCart} />  */} 


        <CardGroup cardArray={CardData} addToCart={handleAddToCart} redirectToCart={useRedirectToCart} />



        
              {/* <h2>Cart</h2>  */}




              {/* <button onClick={goToCart}>Go to Cart ({cartItems.length})</button> */}






                {/* Code below to show clicked card products add to cart  */}

              {/* {cartItems.length === 0 ? (
                  <p>Your cart is empty.</p>
              ) : (
                  
                  <div className='addedProductBlock'> 

                  <div className='addedProductImage'> 
                      {cartItems.map((item) => (
                          <img key={item.id} src={item.image} className='addedCardImage' />
                           
                      ))}
                    
                  </div> 



                    <div className='addedProductTitle'>
                      {cartItems.map((item) => (
                          <p key={item.id}>
                            {item.title}
                          </p>
                      ))}
                    </div> 

                    <div className='addedProductPrice'>
                      {cartItems.map((item) => (
                          <p key={item.id}>
                            {item.price}
                          </p>
                      ))}
                    </div> 



                    


                  </div> 

                  



              )}
          </div> 




 */}


                {/* <div className="itemBlock">
                    <div className='imageBlock'>
                        <Link to="/"><img src={apple} alt="Apple" className="item" /></Link>
                    </div>
                    <div className='textBlock'>
                        <p>Apple Gala</p>
                        <div className='product-description'> 
                        <p>per 1 kg</p>
                        {<AddToCartElement />}
                    </div>
                    </div> 
                    
                </div> 
  
  
                <div className="itemBlock">
                    <div className='imageBlock'>
                        <Link to="/"><img src={grapes} alt="Grapes" className="item" /></Link>
                    </div>
                    <div className='textBlock'>
                        <p>Niagara Grapes</p>
                        <div className='product-description'> 
                        <p>per 1 kg</p>
                        {<AddToCartElement />}
                    </div>
                    </div> 
                    
                </div> 
  
                <div className="itemBlock">
                    <div className='imageBlock'>
                        <Link to="/"><img src={kiwi} alt="Kiwi" className="item" /></Link>
                    </div>
                    <div className='textBlock'>
                        <p>Hayward Kiwi</p>
                        <div className='product-description'> 
                        <p>per 1 kg</p>
                        {<AddToCartElement />}
                    </div>
                    </div> 
                    
                // </div>  */}



          {/* The <fieldset> tag is used to group related elements in a form 
          The <fieldset> tag draws a box around the related elements 
          The <legend> tag defines a caption (name) for the <fieldset> element */} 


      <div className='formContainer'>  
        <div className='forms'>
          <form className='registrationForm' onSubmit={handleRegisterSubmit(handleRegisterButton)}>
           {/* onSubmit={handleSubmit(handleRegisterButton)}
          > */}
            <fieldset>
              <legend>Registration Form</legend>
              <fieldset>
                <label for="firstName">* First Name: </label>
                <input type='text' className='firstName' 
                // regex for email, password, first name, last name
                // {...register('firstName', { 
                {...registerRegisterForm('firstName', {
                  required: 'First name is required', 
                  minLength:{
                    value:2,
                    message: "Minimum 2 characters required"
                    }, 
                    maxLength: {
                    value:10,
                    message: "Max 10 is allowed"
                    },
                  pattern: {
                      value: /([a-zA-Z]\s*)+/,
                      message: 'Invalid first name',
                  },
              })}></input><br></br>
                {/* <span>{errors.firstName?.message}</span> */} 
                <span>{registerErrors.firstName?.message}</span>
              </fieldset>
              {/* <fieldset>
                <label for="lastName">* Last Name: </label>
                <input type='text' className='lastName' 
                {...register('lastName', {
                  required: 'Last name is required', 
                  minLength:{
                    value:2,
                    message: "Minimum 2 characters required"
                    }, 
                    maxLength: {
                    value:10,
                    message: "Max 10 is allowed"
                    },
                  pattern: {
                      value: /[a-zA-Z]/,
                      message: 'Invalid last name',
                  },
              })}></input><br></br>
                <span>{errors.lastName?.message}</span>
              </fieldset> */}
              <fieldset>
                <label for="email">* Email:   </label>
                <input type='email' 
                placeholder='test@gmail.com' 
                // onChange={changeHandler}
                className='email'
                required 
                // {...register('email', { 
                {...registerRegisterForm('email', {
                  required: 'Email is required',
                  pattern: {
                      value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: 'Invalid email address',
                  },
              })}></input><br></br>
              {/* <span>{errors.email?.message}</span> */} 
              <span>{registerErrors.email?.message}</span>
              </fieldset> 

              <fieldset> 
                <fieldset>
                    <label for="passwordRegistration">* Password: </label>
                    <input type='password' 
                    // onChange={changeHandler} 
                    className='password' 
                    // Minimum eight characters, at least one uppercase letter, 
                    // one lowercase letter, one number and one special character 
                    // {...register('passwordRegistration', {
                    {...registerRegisterForm('passwordRegistration', {
                      // required: 'Password is required', 
                      minLength:{
                        value:8,
                        message: "Minimum 8 characters required"
                        }, 
                        maxLength: {
                        value:10,
                        message: "Max 10 is allowed"
                        },
                      pattern: {
                          value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                          message: 'Invalid password: (should have  min 8 characters: uppercase, lowercase, number, special character)',
                      },
                  })}></input><br></br>
                  {/* <span>{errors.passwordRegistration?.message}</span> */} 
                  <span>{registerErrors.passwordRegistration?.message}</span>
                  </fieldset> 

                  {/* type='password' - to hide password with ***** */}
                  {/* <fieldset>
                    <label for="confirmPasswordRegistration">* Confirm Password: </label>
                    <input type='password' className='password' 
                    // Minimum eight characters, at least one uppercase letter, 
                    // one lowercase letter, one number and one special character
                    {...register('confirmPasswordRegistration', {
                      required: "Required",
                      validate: (value) => value !== watch("password") || 'Password does not match',
                    })}></input><br></br>
                  <span>{errors.confirmPasswordRegistration?.message}</span>
                  </fieldset>  */}
              </fieldset>
              
            </fieldset> 
            <div>
                <button type='submit' 
                // onClick={registerHandler} 
                // disabled - block button, disabled will be true, if loading (data from server) will be true 
                // disabled={loading}
                className='submitRegistrationButton'>Register</button>
            </div>
          </form>
      








          <form className='loginForm' 
          // onSubmit={handleSubmit(handleLoginButton)}
          onSubmit={handleLoginSubmit(handleLoginButton)}>
            <fieldset className='formFieldLogin'>
              <legend>Login Form</legend>
              <fieldset>
                <label htmlFor="emailLogin">* Email: </label>
                <input type='email' className='emailLogin' 
                // value={email} onChange={(event) => setEmail(event.target.value)}
                // {...register('emailLogin', {
                {...registerLoginForm('emailLogin', {
                  required: 'Email is required',
                  pattern: {
                      value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: 'Invalid email address',
                  },
              })}></input><br></br> 
                  {/* <span>{errors.emailLogin?.message}</span> */} 
                  <span>{loginErrors.emailLogin?.message}</span>
              </fieldset>
              <fieldset>
                <label htmlFor="passwordLogin">* Password: </label>
                <input type={!isVisible ? 'password' : 'text'}  className='password' 
                // value={password} onChange={(event) => setPassword(event.target.value)}
                // Minimum eight characters, at least one uppercase letter, 
                // one lowercase letter, one number and one special character
                // {...register('passwordLogin', { 
                {...registerLoginForm('passwordLogin', {
                  required: 'Password is required', 
                  minLength:{
                    value:8,
                    message: "Minimum 8 characters required"
                    }, 
                    maxLength: {
                    value:10,
                    message: "Max 10 is allowed"
                    },
                  pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                      message: 'Invalid password: (should have  min 8 characters: uppercase, lowercase, number, special character)',
                  },
              })}></input><br></br>
              {/* <span>{errors.passwordLogin?.message}</span>  */} 
              <span>{loginErrors.passwordLogin?.message}</span> 
              <div className='showPasswordBlock'>
                <input type='checkbox' name='showPassword' onChange={handleShowPasswordToggle}></input>
                <label htmlFor='showPassword'>Show Password</label>
              </div>
              </fieldset>
            </fieldset> 
            <div>
                <button type='submit' 
                // disabled={loading} 
                className='loginButton' 
                // onClick={handleLoginButton}
                >LOGIN</button>
            </div>
          </form>
          </div>
        </div>





              <div>
                <input type='submit' value={'To Backend'} onClick={handleExampleToBackendButton}></input>
              </div>



        {/* </div> */}
            
            {<ScrollToTopButton />} 
            {/* Header, Footer and NavBar will be in App.js  */}
            {/* {<Footer />}   */}
      
      </div> 
    </div> 
     
  );
 } 


export default MainPage;
import React, { useState } from 'react';
import '../MainPage/MainPage.css' 
import { useNavigate } from 'react-router-dom';
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton'; 
import CardGroup from '../Card/CardGroup'; 
import CardData from '../Card/CardData'; 
import '../Card/Card.css'  
import { CartContext } from "../../App.js"; 
import { useContext } from 'react'; 
import { useForm } from "react-hook-form"  
import axios from 'axios'


function MainPage() { 

  const handleLoginButton = async (data) => {
    try {
      const responseData = await axios.post('http://localhost:5000/login', {
        email: data.emailLogin, 
        password: data.passwordLogin, 
      });  

    } catch (error) {
  }
    
}




  const handleRegisterButton = async (data) => {
    try {
      const responseD = await axios.post('http://localhost:5000/registration', {
        firstName: data.firstName,
        email: data.email, 
        password: data.passwordRegistration, 
      });  


    } catch (error) {
      console.log('register button error: ', error)
    }
    
  }










    const {cartItems, setCartItems} = useContext(CartContext); 
  
    const handleAddToCart = (product) => { 
        const updatedCart = [...cartItems, product]; 
        setCartItems(updatedCart); 

        localStorage.setItem('cartItems', JSON.stringify(updatedCart)); 
      
    }; 

 
    
      const useRedirectToCart = () => { 
          const navigate = useNavigate(); 
          navigate("/cart"); 
      }


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


    const [isVisible, setVisible] = useState(false)
    
    const handleShowPasswordToggle = () => { 
      setVisible(!isVisible)
  }
        

    
  return ( 
    <div>
        
        <div className="content"> 

        <CardGroup cardArray={CardData} addToCart={handleAddToCart} redirectToCart={useRedirectToCart} />


      <div className='formContainer'>  
        <div className='forms'>
          <form className='registrationForm' onSubmit={handleRegisterSubmit(handleRegisterButton)}>
            <fieldset>
              <legend>Registration Form</legend>
              <fieldset>
                <label for="firstName">* First Name: </label>
                <input type='text' className='firstName' 
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
                <span>{registerErrors.firstName?.message}</span>
              </fieldset>
              <fieldset>
                <label for="email">* Email:   </label>
                <input type='email' 
                placeholder='test@gmail.com' 
                className='email'
                required 
                {...registerRegisterForm('email', {
                  required: 'Email is required',
                  pattern: {
                      value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: 'Invalid email address',
                  },
              })}></input><br></br>
              <span>{registerErrors.email?.message}</span>
              </fieldset> 

              <fieldset> 
                <fieldset>
                    <label for="passwordRegistration">* Password: </label>
                    <input type='password' 
                    className='password' 
                    {...registerRegisterForm('passwordRegistration', {
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
                  <span>{registerErrors.passwordRegistration?.message}</span>
                  </fieldset> 
              </fieldset>
              
            </fieldset> 
            <div>
                <button type='submit' 
                className='submitRegistrationButton'>Register</button>
            </div>
          </form>
      

          <form className='loginForm' 
          onSubmit={handleLoginSubmit(handleLoginButton)}>
            <fieldset className='formFieldLogin'>
              <legend>Login Form</legend>
              <fieldset>
                <label htmlFor="emailLogin">* Email: </label>
                <input type='email' className='emailLogin' 
                {...registerLoginForm('emailLogin', {
                  required: 'Email is required',
                  pattern: {
                      value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: 'Invalid email address',
                  },
              })}></input><br></br> 
                  <span>{loginErrors.emailLogin?.message}</span>
              </fieldset>
              <fieldset>
                <label htmlFor="passwordLogin">* Password: </label>
                <input type={!isVisible ? 'password' : 'text'}  className='password' 
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
              <span>{loginErrors.passwordLogin?.message}</span> 
              <div className='showPasswordBlock'>
                <input type='checkbox' name='showPassword' onChange={handleShowPasswordToggle}></input>
                <label htmlFor='showPassword'>Show Password</label>
              </div>
              </fieldset>
            </fieldset> 
            <div>
                <button type='submit' 
                className='loginButton' 
                >LOGIN</button>
            </div>
          </form>
          </div>
        </div>
            
            {<ScrollToTopButton />} 
      
      </div> 
    </div> 
     
  );
 } 


export default MainPage;
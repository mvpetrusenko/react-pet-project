import React, { useState, useEffect } from 'react';
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

import {useHttp} from '../hooks/http.hook'




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

  const { loading, error, request } = useHttp() 

  const registerHandler = async () => {
    try { 
      // function request with parameters: url... 
      // in routes/auth.routes.js in the backend project
      const data = await request('/api/auth/register', 'POST', {...form}) 
      console.log('Data', data)
    } catch (e) { 
      // catch will be empty, because it is in useHttp hook
    }

  }


  const [form, setForm] = useState({ 
      email: '', password: ''      
   }) 

   // ...form - spread data from form 
   // event.target.name - name will be email or password - className='email'
   const changeHandler = event => {
      setForm({ ...form, [event.target.name]: event. target.value })
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


      const { 
        register, 
        watch, 
        handleSubmit, 
        getValues, 
        formState: { errors }} = useForm({mode: "onChange"} 
          ); 



    



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
          <form className='registrationForm'>
            <fieldset>
              <legend>Registration Form</legend>
              <fieldset>
                <label for="firstName">* First Name: </label>
                <input type='text' className='firstName' 
                // regex for email, password, first name, last name
                {...register('firstName', {
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
                <span>{errors.firstName?.message}</span>
              </fieldset>
              <fieldset>
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
              </fieldset>
              <fieldset>
                <label for="email">* Email:   </label>
                <input type='email' 
                placeholder='test@gmail.com' 
                onChange={changeHandler}
                className='email'
                required 
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                      value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: 'Invalid email address',
                  },
              })}></input><br></br>
              <span>{errors.email?.message}</span>
              </fieldset> 

              <fieldset> 
                <fieldset>
                    <label for="passwordRegistration">* Password: </label>
                    <input type='password' onChange={changeHandler} className='password' 
                    // Minimum eight characters, at least one uppercase letter, 
                    // one lowercase letter, one number and one special character 
                    {...register('passwordRegistration', {
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
                  <span>{errors.passwordRegistration?.message}</span>
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
                onClick={registerHandler} 
                // disabled - block button, disabled will be true, if loading (data from server) will be true 
                disabled={loading}
                className='submitRegistrationButton'>Register</button>
            </div>
          </form>
      








          <form className='loginForm'>
            <fieldset className='formFieldLogin'>
              <legend>Login Form</legend>
              <fieldset>
                <label for="userName">* Username: </label>
                <input type='text' className='userName' 
                {...register('userName', {
                  required: 'Username is required', 
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
                      message: 'Invalid username',
                  },
              })}></input><br></br> 
                  <span>{errors.userName?.message}</span>
              </fieldset>
              <fieldset>
                <label for="passwordLogin">* Password: </label>
                <input type='password' className='password' 
                // Minimum eight characters, at least one uppercase letter, 
                // one lowercase letter, one number and one special character
                {...register('passwordLogin', {
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
              <span>{errors.passwordLogin?.message}</span>
              </fieldset>
            </fieldset> 
            <div>
                <button type='submit' disabled={loading} className='loginButton'>LOGIN</button>
            </div>
          </form>
          </div>
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
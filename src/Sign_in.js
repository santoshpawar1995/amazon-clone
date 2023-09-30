import React, { useState } from 'react'
import './Sign_in.css'
import { auth } from './Firebase'


function Sign_in() {
    const [Email, setEmail]=useState('')
    const [Password, setPassword]=useState('')

    const SignIn= e =>{
        e.preventDefault( )

    }
    const Register=e=>{
        e.preventDefault( )
        auth.CreateUserWithEmailAndPassword(Email, Password)
        .then((auth)=>{
            console.log(auth); 
        }
        )
        .catch(error=>alert(error.message))
    }

    
  return (
   
        <div className='login'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjmCv7S_OnHxK8CO_TFj3RF3ggyZY6uoDkpA&usqp=CAU' alt=''/>
        <div className='login_container'>
         <h1>Sign-in</h1>
         <form>
            <h5>E-mail</h5>
            <input type='text' value={Email} onChange={e=>setEmail(e.target.value)}/>
            <h5>Password</h5>
            <input type='Password' value={Password} onChange={e=>setPassword(e.target.Password)}/>
            <button type='submit' onClick={SignIn} className='button1'> Sign in</button>
            <p>
                By signing-in you agree to the AMAZON FAKE 
                CLONE Conditions of use & Sale. Please see our 
                Privacy Notice,out Cookies Notice and our Interest-
                Based Ads Notice 
            </p>
            {/* <button className='button2' onClick={Register}>Create your Amazon Account</button> */}
         </form>

        </div>
        </div>
   
  )
}

export default Sign_in
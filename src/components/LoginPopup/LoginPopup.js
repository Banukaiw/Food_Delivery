import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/frontend_assets/assets'

const LoginPopup = ({setShowLogin}) => {
    const [currState,setCurrState] = useState("Log in")

  return (
    <div className='login-popup'>
        <form  className='login-popup-container'>
            <div className='login-popup-title'>
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt=''></img>
            </div>
            <div className='login-popup-inputs'>
                {currState==="Log in"?<></>:<input type='text'placeholder='Your Name' required></input>}
                
                <input type='email' placeholder='Your Email' required></input>
                <input type='password' placeholder='Your Password'required></input>
            </div>
            <button>{currState==="Sign Up"?"create account":"Login"}</button>
            <div className='login-popup-condition'>
                <input type='checkbox' required></input>
                <p>By continuing , I agree to the terms of use & privacy policy.</p>
            </div>
            {currState==="log in"
            ?<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click hear</span></p>
            :<p>Already have an account?  <span onClick={()=>setCurrState("log in")}>Login hear</span></p>
            }
            
            
        </form>
    </div>
  )
}

export default LoginPopup
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
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon}></img>
            </div>
            <div className='login-popup-inputs'>
                {currState==="Log in"?<></>:<input type='text'placeholder='Your Name' required></input>}
                
                <input type='email' placeholder='Your Email' required></input>
                <input type='password' placeholder='Your Password'required></input>
            </div>
            <button>{currState==="Sign Up"?"create account":"Login"}</button>
            <div className='login-popup-condition'>
                <input type='checkbox' required></input>
                <p>By continuing , i agree to the terms of use & privacy policy.</p>
            </div>
            <p>Create a new account? <span>Click hear</span></p>
        </form>
    </div>
  )
}

export default LoginPopup
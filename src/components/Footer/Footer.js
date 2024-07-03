import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                {/* <img src={assets.logo} alt=''></img> */}
                <h1>Taste Wish</h1>
                <p>Welcome to Taste Wish, where we bring delicious meals from your favorite restaurants straight to your doorstep, ensuring a convenient, quick, and delightful dining experience with just a few clicks. Savor the convenience of gourmet dining at home.</p>
                <div className='footer-scoial-icons'>
                    <img src={assets.facebook_icon} alt=''></img>
                    <img src={assets.twitter_icon} alt=''></img>
                    <img src={assets.linkedin_icon} alt=''></img>
                </div>
            </div>
            
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Deliver</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div className='footer-content-right'>
                <h2>Get In Touch</h2>
                <ul>
                    <li>(+94)787642771</li>
                    <li>tastewish@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className='footer-copyright'>Copright 2024 @ FastDelivery.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
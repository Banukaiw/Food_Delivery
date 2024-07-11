import React, { useState } from 'react'
import './navbar.css'
import {assets} from '../../assets/frontend_assets/assets'
import { Link } from 'react-router-dom';

const Navbar = ({setShowLogin}) => {

    const [menu,setMenu] = useState("menu");
  return (
    <div className='navbar'>
        {/* <img className='logo' src={assets.logo} alt="logo"></img> */}
        <h1>Taste Wish</h1>
        <ul className='navbar-menu'>
            <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
            <a href='#explore-menu'  onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
            <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
            <a href='#footer' onClick={()=>setMenu("contactus")} className={menu==="contact-us"?"active":""}>contact us</a>
        </ul>
        <div className='navbar-right'>
            <img src={assets.search_icon} alt=''></img>
            <div className='navbar-search-icon'>
                <img src={assets.basket_icon} alt ="basket"></img>
                <div className='dot'></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>sign in</button>
        </div>
    </div>
  )
}

export default Navbar
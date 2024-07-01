import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/frontend_assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience Download <br/> Fast Delivery App</p>
        <div className='app-download-platform'>
            <img src={assets.app_store}></img>
            <img src={assets.play_store}></img>
        </div>
    </div>
  )
}

export default AppDownload
import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/frontend_assets/assets'

const ExploreMenu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-text'>uuuuuuuuuuu uuuuuu u u u u u uuuuuuuuuuuuuuu u u u uu u uu  u u uuuuuu u </p>
        <div className='explore-menu-list'>
            {menu_list.map((item,index)=>{
                return (
                    <div key={index} className='explore-menu-list-item'>
                        <img src={item.menu_image} alt=""></img>
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ExploreMenu
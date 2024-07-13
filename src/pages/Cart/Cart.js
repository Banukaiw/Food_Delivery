import React, { useContext } from 'react'
import './Cart.css'
import {StoreContext} from '../../context/StoreContext'

const Cart = () => {

  const {cartItems,food_list,removeFromCart} = useContext(StoreContext)
  return (
    <div className='cart'>
      <div className='cart-item'>
        <div className='cart-item-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br/>
        <hr/>
        {food_list.map((item,index)=>{
          if(cartItems[item._id] > 0)
          {
            return(
              <div>
                <div className='cart-item-title cart-item-item'>
                <img src={item.image} alt=''></img>
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${item.price * cartItems[item._id]}</p>
                <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
              </div>
              <hr/>
              </div>
              
            )
          }
        })}
      </div>
      <div className='cart-bottom'>
        <div className='cart-total'>
          <h2>cart Totals</h2>
          <div>
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>{0}</p>
            </div>
            <hr/>
            <div className='cart-total-details'>
              <p>Delivery Free</p>
              <p>{2}</p>
            </div>
            <hr/>
            <div className='cart-total-details'>
              <p>Total</p>
              <p>{0}</p>
            </div>
            
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className='cart-promocode'>
          <p>If you have a promo code, Enter it hear</p>
          <div className='cart-prpmocode-input'>
            <input type='text' placeholder='promo code'></input>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivert Information</p>
        <div className="muilti-fileds">
          <input type="text" placeholder="first name"></input>
          <input type="text" placeholder="last name"></input>
        </div>
        <input type="text" placeholder="Email Adress"></input>
        <input type="text" placeholder="Street"></input>
        <div className="muilti-fileds">
          <input type="text" placeholder="City"></input>
          <input type="text" placeholder="State"></input>
        </div>
        <div className="muilti-fileds">
          <input type="text" placeholder="Zip Code"></input>
          <input type="text" placeholder="Counrty"></input>
        </div>
        <input type="text" placeholder="phone"></input>
      </div>
      <div className="place-order-right">
      <div className='cart-total'>
          <h2>Cart Totals</h2>
          <div>
          <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>RS.{getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className='cart-total-details'>
              <p>Delivery Free</p>
              <p>RS.{getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr/>
            <div className='cart-total-details'>
              <p>Total</p>
              <p>RS.{getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
            </div>
            
            
          </div>
          <button >PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;

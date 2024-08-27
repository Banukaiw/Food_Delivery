import React from "react";
import "./PlaceOrder.css";

const PlaceOrder = () => {
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
      <div className="place-order-right"></div>
    </form>
  );
};

export default PlaceOrder;

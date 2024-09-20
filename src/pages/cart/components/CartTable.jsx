import React, { useRef, useState } from "react";
import "../../../styles/cart/CartTable.css";
import { PiBagThin } from "react-icons/pi";
import test from "../../../assets/images/mission.jpg";
import { GoPlus } from "react-icons/go";
import { FaMinus } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";

const CartTable = () => {
  const ref = useRef(null);

  const [isActive, setIsActive] = useState(false); // State to track if the class is active

  const handleClick = () => {
    setIsActive(!isActive);

    if (ref.current) {
      if (!isActive) {
        ref.current.classList.add("coupon__container__view"); // Add the class when isActive is false
      } else {
        ref.current.classList.remove("coupon__container__view"); // Remove the class when isActive is true
      }
    }
  };

  const products = [
    { image: test, name: "Red Royal Cappet", quantity: 1, price: 300 },
    { image: test, name: "Red Royal Cappet", quantity: 1, price: 300 },
    { image: test, name: "Red Royal Cappet", quantity: 1, price: 300 },
    { image: test, name: "Red Royal Cappet", quantity: 1, price: 300 },
    { image: test, name: "Red Royal Cappet", quantity: 1, price: 300 },
    { image: test, name: "Red Royal Cappet", quantity: 1, price: 300 },
    { image: test, name: "Red Royal Cappet", quantity: 1, price: 300 },
    { image: test, name: "Red Royal Cappet", quantity: 1, price: 300 },
    { image: test, name: "Red Royal Cappet", quantity: 1, price: 300 },
    { image: test, name: "Red Royal Cappet", quantity: 1, price: 300 },
  ];

  return (
    <div className="cart__container">
      {products.length === 0 ? (
        <div className="empty__cart">
          <PiBagThin className="empty__cart__icon" />
          <p className="empty__cart__text">Your cart is currently empty</p>
          <p className="empty__cart__link">RETURN TO SHOP</p>
        </div>
      ) : (
        <div className="cart">
          <div className="cart__table__container">
            <div className="cart__table__header__container">
              <p>PRODUCT</p>
              <div>
                <p>QUANTITY</p>
                <p>SUBTOTAL</p>
              </div>
            </div>
            <div className="cart__table__row__container">
              {products.map((product, i) => (
                <div key={i} className="cart__table__row">
                  <RxCross1 className="x__1" />
                  <img
                    src={product.image}
                    alt={product.name}
                    className="cart__image"
                  />
                  <div>
                    <div className="name__x">
                      <div className="product__name__quntity">
                        <p className="product__name">{product.name}</p>
                        <p className="quantity__price">{`${product.quantity} x $${product.price}`}</p>
                      </div>
                      <RxCross1 className="x__2" />
                    </div>
                    <div className="quantity__manager__final__price">
                      <div className="quantity__manager">
                        <GoPlus className="adding" />
                        <p>{product.quantity}</p>
                        <FiMinus className="adding" />
                      </div>
                      <p>${(product.price * product.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="check__out">
            <div ref={ref} className="coupon__container">
              <div className="coupon__text__container">
                <p>Coupon Code</p>
                <RiArrowDropDownLine
                  onClick={handleClick}
                  className="dropdown__icon"
                />
              </div>
              <div className="coupon__input__container">
                <input
                  type="text"
                  className="coupon__input"
                  placeholder="Enter coupon code"
                />
                <button className="apply__coupon__button">APPLY</button>
              </div>
            </div>
            <div className="coupon__container__subtotal">
              <div className="coupon__text__container">
                <p>Subtotal</p>
                <p>$4,900</p>
              </div>
            </div>
            <div className="coupon__container__shipping">
              <p className="coupon__shipping__text">Shipping</p>
              <div className="shipping__fee__container">
                <label className="radio__styling">
                  <input type="radio" name="shipping" value="paid" checked />
                  <p>Fate rate: </p>
                </label>
                <p>$30</p>
              </div>
              <label className="radio__styling">
                <input type="radio" name="shipping" value="free" />
                <p>Free Shipping rate: </p>
              </label>
              <p className="shipping__location">Shipping to Victoria.</p>
            </div>
            <div className="coupon__container__total">
              <div>
                <p className="coupon__text__total">Total</p>
                <p className="total__price">$4,900</p>
              </div>
            </div>
            <div className="check__out__btn_container">
              <button className="check__out__btn">CHECK OUT</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartTable;

import React, { useContext, useRef, useState } from "react";
import "../../../styles/cart/CartTable.css";
import { PiBagThin } from "react-icons/pi";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { GalleryContext } from "../../../context/gallery/GalleryProvider";

const CartTable = () => {
  const {
    galleryDatas,
    addToCart,
    reduceProductQuantity,
    getTotalPriceAmount,
  } = useContext(GalleryContext);

  const ref = useRef(null);
  const ref2 = useRef(null);

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);

    if (ref.current) {
      if (!isActive) {
        ref.current.classList.add("coupon__container__view");
      } else {
        ref.current.classList.remove("coupon__container__view");
      }
    }
  };

  const [active, setActive] = useState("paid");

  const handleChange = (value) => {
    setActive(value);
  };

  const [loading, setLoading] = useState(false);

  const [coupon, setCoupon] = useState("");

  const handleCheckOut = () => {
    if (coupon.trim() === "") {
      ref.current.classList.add("coupon__container__view");
      ref2.current.classList.add("red__line");
    } else if (coupon === "DECOVISTA10") {
      ref.current.classList.remove("coupon__container__view");
      setLoading(true);
    } else {
      alert("Invalid coupon code!");
      ref2.current.classList.add("red__line");
    }
  };

  return (
    <div className="cart__container">
      {galleryDatas.length === 0 ? (
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
              {galleryDatas.map((product, i) => {
                const pageContent = galleryDatas.find(
                  (item) => item.id === product.id
                );
                return (
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
                          <FiMinus
                            className="adding"
                            onClick={() => reduceProductQuantity(product.id)}
                          />
                          <p>{product.quantity}</p>
                          <GoPlus
                            className="adding"
                            onClick={() => addToCart(pageContent)}
                          />
                        </div>
                        <p>${(product.price * product.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="check__out">
            <div ref={ref} className="coupon__container">
              <div className="coupon__text__container">
                <p>User Code</p>
                <RiArrowDropDownLine
                  onClick={handleClick}
                  className="dropdown__icon"
                />
              </div>
              <div ref={ref2} className="coupon__input__container">
                <input
                  type="text"
                  className="coupon__input"
                  placeholder="Enter coupon code"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                />
                <button className="apply__coupon__button">APPLY</button>
              </div>
            </div>
            <div className="coupon__container__subtotal">
              <div className="coupon__text__container">
                <p>Subtotal</p>
                <p>{getTotalPriceAmount()[2]}</p>
              </div>
            </div>
            <div className="coupon__container__shipping">
              <p className="coupon__shipping__text">Shipping</p>
              <div className="shipping__fee__container">
                <label className="radio__styling">
                  <input
                    type="radio"
                    name="shipping"
                    value="paid"
                    checked={active === "paid"} // Control the checked state
                    onChange={() => handleChange("paid")}
                  />
                  <p>Flat rate: </p>
                </label>
                <p>$30</p>
              </div>
              <label className="radio__styling">
                <input
                  type="radio"
                  name="shipping"
                  value="free"
                  checked={active === "free"} // Control the checked state
                  onChange={() => handleChange("free")}
                />
                <p>Free Shipping rate: </p>
              </label>
              <p className="shipping__location">Shipping to Victoria.</p>
            </div>
            <div className="coupon__container__total">
              <div>
                <p className="coupon__text__total">Total</p>
                <p className="total__price">{`${
                  active === "paid"
                    ? getTotalPriceAmount()[1]
                    : getTotalPriceAmount()[0]
                }`}</p>
              </div>
            </div>
            <div className="check__out__btn_container">
              {loading ? (
                <div className="check__out__btn__loader">
                  <div className="loader2" />
                </div>
              ) : (
                <button className="check__out__btn" onClick={handleCheckOut}>
                  CHECK OUT
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartTable;

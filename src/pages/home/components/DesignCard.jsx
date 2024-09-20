import React from 'react';
import { PiShoppingCartSimpleBold, PiShoppingCartSimpleFill } from 'react-icons/pi';
import "../../../styles/home/DesignCard.css";

const DesignCard = ({ title, price, designer, inCart, image }) => {
  return (
    <div className='design'>
      <div className="image-wrapper">
        <img src={image} alt={title} />
      </div>

      <div className="text-container">
        <div className="">
          <span className='title'>{title}</span>
          <span className='price'>&#x20A6;{price.toLocaleString()}</span>
        </div>

        <div className="">
          <div className="cart-icon">
            {inCart ? (
              <PiShoppingCartSimpleFill className='i active' />
            ) : (
              <PiShoppingCartSimpleBold className='i' />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignCard;
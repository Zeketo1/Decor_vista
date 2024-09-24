import React, { useContext, useEffect, useState } from "react";
import {
  PiShoppingCartSimpleBold,
  PiShoppingCartSimpleFill,
} from "react-icons/pi";
import "../../../styles/home/DesignCard.css";
import { CheckBadgeIcon } from "@heroicons/react/16/solid";
import { GalleryContext } from "../../../context/gallery/GalleryProvider";

const DesignCard = ({ title, price, designer, inCart, image, item }) => {
  const { addToCart } = useContext(GalleryContext);
  const [added, setAdded] = useState(false);

  const handleCart = (item) => {
    setAdded(true);
    addToCart(item);
  };

  useEffect(() => {
    const unCheck = setInterval(() => {
      setAdded(false);
    }, 1000);

    return () => clearInterval(unCheck);
  }, [added]);

  return (
    <div className="design">
      <div className="image-wrapper">
        <img src={image} alt={title} />
      </div>

      <div className="text-container">
        <div className="">
          <span className="title">{title}</span>
          <span className="price">${price.toLocaleString()}</span>
        </div>
        <div className="">
          <div className="cart-icon" onClick={() => handleCart(item)}>
            {added ? (
              <PiShoppingCartSimpleFill className="i active" />
            ) : (
              <PiShoppingCartSimpleBold className="i" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignCard;

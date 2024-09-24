import React, { createContext, useEffect, useState } from "react";
import { showToast } from "../../pages/utils";

export const GalleryContext = createContext(null);

const GalleryProvider = ({ children }) => {
  const initialCartItems =
    JSON.parse(localStorage.getItem("galleryDatas")) || [];

  const [galleryDatas, setGalleryDatas] = useState(initialCartItems);

  useEffect(() => {
    localStorage.setItem("galleryDatas", JSON.stringify(galleryDatas));
  }, [galleryDatas]);

  const addToCart = (item) => {
    let productExists = galleryDatas.find(
      (gallerydata) => gallerydata.id === item.id
    );

    if (productExists) {
      setGalleryDatas((p) =>
        p.map((gallerydata) =>
          gallerydata.id === item.id
            ? { ...gallerydata, quantity: gallerydata.quantity + 1 }
            : gallerydata
        )
      );
    } else {
      setGalleryDatas((p) => [...p, { ...item, quantity: 1 }]);
    }
    showToast("Added to cart", "success");
  };

  const removeFromCart = (productId) =>
    setGalleryDatas((p) => p.filter((item) => item.id !== productId));

  const reduceProductQuantity = (productId) => {
    let itemToRemove = galleryDatas.find(
      (gallerydata) => gallerydata.id === productId
    );
    if (itemToRemove.quantity > 1) {
      setGalleryDatas((p) =>
        p.map((gallerydata) =>
          gallerydata.id === productId
            ? { ...gallerydata, quantity: gallerydata.quantity - 1 }
            : gallerydata
        )
      );
    } else {
      removeFromCart(productId);
    }
  };

  const getTotalPriceAmount = () => {
    const totalPrice = galleryDatas.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const subtotal = galleryDatas.reduce(
      (total, item) => total + item.price * item.quantity,
      0 + 30
    );

    const subtotal2 = galleryDatas.reduce(
      (total, item) => total + item.price * item.quantity,
      0 + 5
    );

    const formattedTotalPrice = totalPrice.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    const formattedTotalPrice2 = subtotal.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    const formattedTotalPrice3 = subtotal.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    return [formattedTotalPrice, formattedTotalPrice2, formattedTotalPrice3];
  };

  return (
    <GalleryContext.Provider
      value={{
        removeFromCart,
        galleryDatas,
        setGalleryDatas,
        addToCart,
        reduceProductQuantity,
        getTotalPriceAmount,
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
};

export default GalleryProvider;

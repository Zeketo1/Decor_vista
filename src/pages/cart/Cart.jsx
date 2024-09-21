import React from "react";
import Banner from "./components/Banner";
import CartTable from "./components/CartTable";

const Cart = () => {
  return (
    <div style={{ backgroundColor: "var(--gray-100)" }}>
      <Banner />
      <CartTable />
    </div>
  );
};

export default Cart;

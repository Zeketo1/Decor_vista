import React from "react";
import Banner from "./components/Banner";
import CartTable from "./components/CartTable";
import Navbar from "../home/components/Navbar";
import Footer from "../home/components/Footer";

const Cart = () => {
  return (
    <div style={{ backgroundColor: "var(--gray-100)" }}>
      <Navbar />
      <Banner />
      <CartTable />
      <Footer />
    </div>
  );
};

export default Cart;

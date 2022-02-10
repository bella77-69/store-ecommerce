import React from "react";
import CartItem from "./CartItem";

export default function CartList({ value }) {
  const { cart } = value;
  console.log(value, cart);
  return (
    <div className="container-fluid">
      {cart.map((items) => {
        return <CartItem key={items.id} item={items} value={value} />;
      })}
    </div>
  );
}

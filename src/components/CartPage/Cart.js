import React from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotal from "./CartTotals";
function Cart() {
  return (
    <section className="py-5">
      {/*title */}
      <div className="container">
        <Title title="your car items" center />
      </div>
      {/* Cart Column*/}
      <CartColumns />
      {/* Cart List*/}
      <CartList />
      {/* Cart Total*/}

      <CartTotal />
    </section>
  );
}

export default Cart;

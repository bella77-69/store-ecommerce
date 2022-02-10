import React from "react";
import { Link } from "react-router-dom";
import PayPalBtn from "./PayPalBtn";

function CartTotals({ value, history }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-auto col-sm-8 text-capitalize text-right">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-4 px-2"
                type="button"
                onClick={() => clearCart()}
              >
                clear cart
              </button>
            </Link>
            <h5>
              <span className="text-title">subtotal : </span>{" "}
              <strong>$ {cartSubTotal}</strong>
            </h5>
            <h5>
              <span className="text-title">tax : </span>{" "}
              <strong>$ {cartTax}</strong>
            </h5>
            <h5>
              <span className="text-title">total : </span>{" "}
              <strong>$ {cartTotal}</strong>
            </h5>
            <PayPalBtn total={cartTotal} clearCart={clearCart} history={history}/>

            
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CartTotals;

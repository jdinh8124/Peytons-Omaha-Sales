import React from 'react';

export default function AddCartModal(props) {

  function goToCart() {
    props.setView('cart', {});
  }

  return (
    <div className="container">
      <div className="backdrop position-fixed d-flex h-100 w-100">
        <div className="col-4 modal-contents m-auto bg-white border rounded mt-5 p-5">
          <h2>Item Added to Cart</h2>
          <p>{props.name} has been added to your cart</p>
          <form>
            <div className="btn-group w-100 p-1">
              <button onClick={props.setToCat} className="btn btn-outline-info w-100">Continue Shopping</button>
              <button onClick={goToCart} className="btn btn-outline-success w-100">Go To Cart</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

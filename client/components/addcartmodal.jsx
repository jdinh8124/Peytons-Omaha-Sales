import React from 'react';
import { Link } from 'react-router-dom';

export default function AddCartModal(props) {

  return (
    <div className="container text-center">
      <div className="backdrop position-fixed d-flex h-100 w-100">
        <div className="col-md-5 col-xs-9 modal-contents m-auto bg-white border rounded mt-5 p-5">
          <h2>Item Added to Cart</h2>
          <p>{props.name} has been added to your cart</p>
          <form>
            <div className="btn-group w-100 p-1">
              <Link to="/" className="w-100">
                <button className="btn btn-outline-info w-100">Continue Shopping</button>
              </Link>
              <Link to="/cartSummary" className="w-100">
                <button className="btn btn-outline-success w-100">Go To Cart</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
export default function Header(props) {

  function getItems() {
    if (props.cart === 1) {
      return 'item';
    } else {
      return 'items';
    }
  }

  return (
    <header className=" paddingTop navbar navbar-light col-12 bg-info">
      <Link to="/">
        <div className="pointer ml-md-5">
          <div className="d-inline"><i className="text-white fas fa-football-ball "></i></div>
          <div className="ml-1 d-inline text-white">{props.name}</div>
        </div>
      </Link>
      <Link to="/cartSummary">
        <div className="pointer mr-md-4">
          <div className="d-inline text-white"><i className="fas fa-shopping-cart mr-2"></i></div>
          <div className="d-inline text-white mr-3">{props.cart} {getItems()}</div>
        </div>
      </Link>
    </header>
  );
}

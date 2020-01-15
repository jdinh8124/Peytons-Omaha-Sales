import React from 'react';

export default function Header(props) {

  function getItems() {
    if (props.cart === 1) {
      return 'item';
    } else {
      return 'items';
    }
  }

  return (
    <div className=" paddingTop navbar navbar-light  bg-dark">
      <div className="ml-5">
        <div className="d-inline"><i className="text-white fas fa-dollar-sign "></i></div>
        <div className="ml-1 d-inline text-white">{props.name}</div>
      </div>
      <div className="mr-4">
        <div className="d-inline text-white float-right">{props.cart} {getItems()}</div>
        <div className="d-inline text-white"><i className="fas fa-shopping-cart"></i></div>
      </div>
    </div>
  );
}

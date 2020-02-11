import React from 'react';

export default function ConfirmationItem(props) {
  function pictureSize() {
    if (props.img === '/images/shake-weight.jpg') {
      return <img src={props.img} className="fit-single-shakeweight-confirm" alt="Image of Product" />;
    } else {
      return <img src={props.img} className="fit-single-cart-confirm" alt="Image of Product" />;
    }
  }

  return (
    <div className="card col-12 mb-3 col-lg-7 mb-lg-5 p-2" >
      <div className="row">
        <div className="col-lg-5 d-flex justify-content-center">
          {pictureSize()}
        </div>
        <div className="col-lg-5 col-lg-5 offset-2 offset-lg-0 ">
          <h2 className="card-title ">{props.name}</h2>
          <h3>Quantity: {props.quantity}</h3>
          <h3 className="card-subtitle mb-lg-2 text-muted ">${((props.price * props.quantity) / 100).toFixed(2)}</h3>
        </div>
      </div>
    </div>
  );
}

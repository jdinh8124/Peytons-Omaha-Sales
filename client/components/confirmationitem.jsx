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
    <div className="card col-lg-7 mb-lg-5" >
      <div className="row">
        <div className="col-lg-5">
          {pictureSize()}
        </div>
        <div className="col-lg-5">
          <h2 className="card-title ">{props.name}</h2>
          <h3 className="card-subtitle mb-lg-2 text-muted ">${(props.price / 100).toFixed(2)}</h3>
        </div>
      </div>
    </div>
  );
}

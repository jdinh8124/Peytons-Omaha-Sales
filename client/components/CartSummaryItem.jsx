import React from 'react';

export default function CartSummaryItem(props) {

  function pictureSize() {
    if (props.img === '/images/shake-weight.jpg') {
      return <img src={props.img} className="fit-single-shakeweight" alt="Image of Product" />;
    } else {
      return <img src={props.img} className=" fit-single-cart" alt="Image of Product" />;
    }
  }

  return (
    <div className="card col-lg-7 mb-lg-5" >
      <div className="row">
        <div className="col-lg-4">
          {pictureSize()}
        </div>
        <div className="col-lg-7">
          <h5 className="card-title ">{props.name}</h5>
          <h6 className="card-subtitle mb-lg-2 text-muted ">${(props.price / 100).toFixed(2)}</h6>
          <p className="card-text">{props.shortDescription}</p>
        </div>
      </div>
    </div>
  );
}

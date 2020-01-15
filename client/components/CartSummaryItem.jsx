import React from 'react';

export default function CartSummaryItem(props) {

  return (
    <div className="card  col-7" >
      <div className="row">
        <div className="col-4">
          <img src={props.img} className="ml-1 fit-single-image" alt="Image of Product" />
        </div>
        <div className="col-7">
          <h5 className="card-title ">{props.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted ">${(props.price / 100).toFixed(2)}</h6>
          <p className="card-text">{props.shortDescription}</p>
        </div>
      </div>
    </div>
  );
}

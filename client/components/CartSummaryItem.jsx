import React from 'react';

export default function CartSummaryItem(props) {

  function pictureSize() {
    if (props.img === '/images/shake-weight.jpg') {
      return <img src={props.img} className="fit-single-shakeweight" alt="Image of Product" />;
    } else {
      return <img src={props.img} className=" fit-single-cart" alt="Image of Product" />;
    }
  }

  function deleteItems() {
    props.delete(props.ids[0]);
  }

  function addItems() {
    props.add({ productId: props.productId });
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
          <div>
            <button onClick={deleteItems} className="m-1"><i className="fas fa-minus-square"></i></button>
            {props.quantity}
            <button onClick={addItems}className="m-1"><i className="fas fa-plus-square"></i></button>
          </div>
          <button onClick={deleteItems} className="btn btn-outline-warning">Delete Item</button>
        </div>
      </div>
    </div>
  );
}

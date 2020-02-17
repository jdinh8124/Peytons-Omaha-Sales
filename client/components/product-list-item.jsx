import React from 'react';
import { Link } from 'react-router-dom';
export default function ProductListItem(props) {

  function handleClick() {
    props.onClick('details', {
      productId: props.id
    });
  }

  return (
    <div className="card w-75 mb-5 p-2 col-lg-3 m-md-4 pointer" onClick={handleClick}>
      <Link to="/productDetails" >
        <img src={props.img} className="card-img-top fit-image" alt="Image of Product" />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">${props.cost}</h6>
          <p className="card-text">{props.description}</p>
        </div>
      </Link>
    </div>
  );
}

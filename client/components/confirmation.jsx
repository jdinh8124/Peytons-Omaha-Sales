import React from 'react';
import ConfirmationItem from './confirmationitem';

export default function Confirmation(props) {
  function getItems() {
    const items = props.items.map(item => {
      return <ConfirmationItem key={item.cartItemId} name={item.name} price={item.price} img={item.image} quantity={item.quantity}/>;
    });
    return items;
  }
  function getTotal() {
    let items = 0;
    props.items.map(item => {
      items += parseInt(item.price * item.quantity);
    });
    return (items / 100).toFixed(2);
  }

  function backToCat() {
    props.setView('catalog', {});
  }

  return (
    <>
      <div className="col-md-3 col-sm-12 offset-md-3 mb-5">
        <h1>Order Confirmation</h1>
        <h2>Order Total: $ {getTotal()}</h2>
      </div>
      <div className="col-9 offset-md-2 offset-lg-3 offset-2 ">
        {getItems()}
      </div>
      <h3 className="pointer col-10 offset-1 mt-2 mb-5 mt-3" onClick={backToCat}>{'< Back to the Catalog'}</h3>
    </>
  );
}

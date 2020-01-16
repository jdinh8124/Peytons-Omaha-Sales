import React from 'react';
import ConfirmationItem from './confirmationitem';

export default function Confirmation(props) {
  function getItems() {
    const items = props.items.map(item => {
      return <ConfirmationItem key={item.cartItemId} name={item.name} price={item.price} img={item.image} />;
    });
    return items;
  }
  function getTotal() {
    let items = 0;
    props.items.map(item => {
      items += parseInt(item.price);
    });
    return (items / 100).toFixed(2);
  }

  function backToCat() {
    props.setView('catalog', {});
  }

  return (
    <>
      <div className="col-3 offset-3 mb-5">
        <h1>Order Confirmation</h1>
        <h2>Order Total: $ {getTotal()}</h2>
      </div>
      <div className="col-9 offset-3">
        {getItems()}
      </div>
      <h3 className="pointer col-3 offset-3 mb-5" onClick={backToCat}>{'< Back to the Catalog'}</h3>
    </>
  );
}

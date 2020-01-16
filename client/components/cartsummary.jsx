import React from 'react';
import CartSummaryItem from './CartSummaryItem';

export default function CartSummary(props) {

  function cartItems() {
    const listOfCartItems = props.items.map(item => {
      return <CartSummaryItem cartItemId={item.cartItemId} delete={props.delete}name={item.name} shortDescription={item.shortDescription} price={item.price} img={item.image} key={item.cartItemId}/>;
    });
    return listOfCartItems;
  }

  function calculateTotal() {
    let priceToReturn = 0;
    props.items.map(item => {
      priceToReturn += parseInt(item.price);
    });
    return (priceToReturn / 100).toFixed(2);
  }

  function changeBackToCat() {
    props.setView('catalog', {});
  }

  function changeToCheckout() {
    if (props.items.length > 0) {
      props.setView('checkout', {});

    }
  }

  return (
    <>
      <div className="col-3 offset-2 mb-5">
        <div className="pointer mb-3 " onClick={changeBackToCat}> {'< Back to Catalog'}</div>
        <h2>My Cart</h2>
      </div>
      <div className="d-flex flex-column align-items-center ">
        {cartItems()}
      </div>
      <div className="row mb-5" >
        <h1 className="col-3 offset-3 ">Item Total ${calculateTotal()}</h1>
        <button type="button" onClick={changeToCheckout} className=" offset-2 col-1 btn btn-primary">Checkout Here</button>
      </div>
    </>
  );
}

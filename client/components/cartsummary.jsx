import React from 'react';
import CartSummaryItem from './CartSummaryItem';

export default function CartSummary(props) {

  function cartItems() {
    const listOfCartItems = props.items.map(item => {
      return <CartSummaryItem productId={item.productId} ids={item.ids} add={props.add} quantity={item.quantity} cartItemId={item.cartItemId} delete={props.delete}name={item.name} shortDescription={item.shortDescription} price={item.price} img={item.image} key={item.cartItemId}/>;
    });
    return listOfCartItems;
  }

  function calculateTotal() {
    let priceToReturn = 0;
    props.items.map(item => {
      priceToReturn += parseInt(item.price * item.quantity);
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
      <div className="col-md-3 col-sm-6 offset-md-2 mt-4 mb-5">
        <div className="pointer mb-3 " onClick={changeBackToCat}> {'< Back to Catalog'}</div>
        <h2>My Cart</h2>
      </div>
      <div className="d-flex flex-column align-items-center">
        {cartItems()}
      </div>
      <footer className=" col-sm-8 offset-sm-2 col-md-8 mb-5" >
        <h1 className="total col-md-3 offset-md-0 offset-1 offset-xl-2 d-md-inline" >Item Total: ${calculateTotal()}</h1>
        <button type="button" onClick={changeToCheckout} className="d-md-inline offset-3 offset-md-2 offset-lg-1 offset-xl-4  btn btn-primary">Checkout Here</button>
      </footer>
    </>
  );
}

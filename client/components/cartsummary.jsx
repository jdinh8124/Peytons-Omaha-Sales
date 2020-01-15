import React from 'react';
import CartSummaryItem from './CartSummaryItem';

export default function CartSummary(props) {

  function cartItems() {
    const listOfCartItems = props.items.map(item => {
      return <CartSummaryItem name={item.name} shortDescription={item.shortDescription} price={item.price} img={item.image} key={item.cartItemId}/>;
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

  return (
    <>
      <div className="">
        <div className="pointer" onClick={changeBackToCat}> {'< Back to Catalog'}</div>
        <h2>My Cart</h2>
      </div>
      <div className="d-flex flex-column align-items-center mb-5">
        {cartItems()}
      </div>
      <h1>Item Total {calculateTotal()}</h1>
    </>
  );
}

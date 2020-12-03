import React, { useEffect } from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cartsummary';
import CheckoutForm from './checkoutform';
import IntroModal from './intromodal';
import Confirmation from './confirmation';

export default function App() {
  const [view, setViewState] = React.useState({ name: 'catalog', params: {} });
  const [cart, setCart] = React.useState([]);
  const [previousCart, setPreviousCart] = React.useState([]);
  const [showModal, setShowModal] = React.useState(true);

  const isFirstUpdate = React.useRef(true);
  useEffect(() => {
    if (isFirstUpdate.current) {
      isFirstUpdate.current = false;
      getCartItems();
    }
  });

  const showIntroModal = () => {
    if (showModal) {
      return <IntroModal onClick={closeIntroModal}/>;
    }
  };

  const closeIntroModal = event => {
    event.preventDefault();
    setShowModal(false);
  };

  const getCartItems = () => {
    fetch('/api/cart')
      .then(result => {
        return result.json();
      })
      .then(myJson => {
        setCart(myJson);
        setViewState({ name: 'catalog', params: {} });
      })
      .catch(reason => {
        console.error(reason.message);
      });
  };

  const addToCart = product => {
    fetch('/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ productId: product.productId })
    })
      .then(response => {
        return response.json();
      }).then(myJson => {
        let found = false;
        const newArray = [...cart];
        newArray.map(item => {
          if (item.productId === myJson.productId) {
            found = true;
          }
        });
        if (found) {
          newArray.map(item => {
            if (item.productId === myJson.productId) {
              item.quantity += 1;
              item.ids.push(myJson.cartItemId);
            }
          });
          setCart(newArray);
        } else {
          myJson.quantity = 1;
          myJson.ids = [myJson.cartItemId];
          newArray.push(myJson);
          setCart(newArray);

        }
      })
      .catch(reason => {
        console.error(reason.message);
      });
  };

  const setView = (name, params) => {
    setViewState({
      name: name,
      params: params
    });
  };

  const setViewFromConfirm = (name, params) => {
    setViewState({
      name: name,
      params: params
    });
    setPreviousCart([]);
  };

  const placeOrder = object => {
    fetch('/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(object)
    })
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        setViewState({
          name: 'confirmation',
          params: {}
        });
        const oldOrder = [...cart];
        setPreviousCart(oldOrder);
        setCart([]);
      })
      .catch(reason => {
        console.error(reason.message);
      });
  };

  const deleteAllItems = products => {
    products.ids.map(ids =>

      fetch('/api/cart', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ cartItemId: ids })
      })

    );

    const newArray = [...cart];
    const indexMatch = newArray.findIndex(items =>
      items.productId === products.productId);
    newArray.splice(indexMatch, 1);
    setCart(newArray);
  };

  const deleteItem = product => {
    fetch('/api/cart', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ cartItemId: product })
    })
      .then(myJson => {
        const newArray = [...cart];
        const indexMatch = newArray.findIndex(items =>
          items.ids[0] === product);

        if (newArray[indexMatch].quantity === 1) {
          newArray.splice(indexMatch, 1);
          setCart(newArray);
        } else {
          newArray[indexMatch].quantity -= 1;
          newArray[indexMatch].ids.shift();
          newArray[indexMatch].cartItemId = newArray[indexMatch].ids[0];
          setCart(newArray);
        }
      })
      .catch(reason => {
        console.error(reason.message);
      });
  };

  const cartItemsCount = () => {
    let quantityGroup = 0;
    cart.map(items => {
      quantityGroup += items.quantity
      ;
    });
    return quantityGroup;
  };

  const bodyToRender = () => {
    let viewToRender;
    if (view.name === 'catalog') {
      viewToRender = <ProductList setView={setView} />;
    } else if (view.name === 'cart') {
      viewToRender = <CartSummary setView={setView} items={cart} add={addToCart} delete={deleteItem} deleteAll={deleteAllItems} />;
    } else if (view.name === 'checkout') {
      viewToRender = <CheckoutForm placeOrder={placeOrder} items={cart} setView={setView} />;
    } else if (view.name === 'confirmation') {
      viewToRender = <Confirmation setView={setViewFromConfirm} items={previousCart} />;
    } else {
      viewToRender = <ProductDetails setView={setView} view={view.params} button={addToCart}/>;
    }
    return viewToRender;
  };

  return (
    <div>
      {showIntroModal()}
      <Header name="Peyton's Omaha Sales" cart={cartItemsCount()} onClick={setView}/>
      {bodyToRender()}
    </div>
  );

}

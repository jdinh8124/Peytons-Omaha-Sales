import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cartsummary';
import CheckoutForm from './checkoutform';
import IntroModal from './intromodal';
import Confirmation from './confirmation';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      },
      cart: [],
      previousCart: [],
      showModal: true
    };
    this.setView = this.setView.bind(this);
    this.setViewFromConfirm = this.setViewFromConfirm.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.closeIntroModal = this.closeIntroModal.bind(this);
  }

  componentDidMount() {
    fetch('/api/health-check');
    this.getCartItems();
  }

  showIntroModal() {
    if (this.state.showModal) {
      return <IntroModal onClick={this.closeIntroModal}/>;
    }
  }

  closeIntroModal() {
    this.setState(previousState => ({ showModal: false })
    );
  }

  getCartItems() {
    fetch('/api/cart')
      .then(result => {
        return result.json();
      })
      .then(myJson => {
        this.setState(previousState => ({
          cart: myJson
        }));
        this.setState(previousState => ({ view: { name: 'catalog', params: {} } }
        ));
      })
      .catch(reason => {
        console.error(reason.message);
      });
  }

  addToCart(product) {
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
        const newArray = [...this.state.cart];
        newArray.push(myJson);
        this.setState(previousState => ({
          cart: newArray
        }));
      })
      .catch(reason => {
        console.error(reason.message);
      });
  }

  setView(name, params) {
    this.setState(previousState => ({
      view: {
        name: name,
        params: params
      }
    }));
  }

  setViewFromConfirm(name, params) {
    this.setState(previousState => ({
      view: {
        name: name,
        params: params
      },
      previousCart: []
    }));
  }

  placeOrder(object) {
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
        this.setState(previousState => ({
          view: {
            name: 'confirmation',
            params: {}
          }
        }
        ));
        const oldOrder = [...this.state.cart];
        this.setState(previousState => ({
          cart: [],
          previousCart: oldOrder
        }));
      })
      .catch(reason => {
        console.error(reason.message);
      });
  }

  deleteItem(product) {
    fetch('/api/cart', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ cartItemId: product })
    })
      .then(myJson => {
        const newArray = [...this.state.cart];
        const indexMatch = newArray.findIndex(items =>
          items.cartItemId === product);
        newArray.splice(indexMatch, 1);
        this.setState(previousState => ({
          cart: newArray
        }));
      })
      .catch(reason => {
        console.error(reason.message);
      });
  }

  bodyToRender() {
    let view;
    if (this.state.view.name === 'catalog') {
      view = <ProductList setView={this.setView} />;
    } else if (this.state.view.name === 'cart') {
      view = <CartSummary setView={this.setView} items={this.state.cart} delete={this.deleteItem}/>;
    } else if (this.state.view.name === 'checkout') {
      view = <CheckoutForm placeOrder={this.placeOrder} items={this.state.cart} setView={this.setView} />;
    } else if (this.state.view.name === 'confirmation') {
      view = <Confirmation setView={this.setViewFromConfirm} items={this.state.previousCart} />;
    } else {
      view = <ProductDetails setView={this.setView} view={this.state.view.params} button={this.addToCart}/>;
    }
    return view;
  }

  render() {
    return (
      <div>
        {this.showIntroModal()}
        <Header name="Wicked Sales" cart={this.state.cart.length} onClick={this.setView}/>,
        {this.bodyToRender()}
      </div>
    );
  }
}

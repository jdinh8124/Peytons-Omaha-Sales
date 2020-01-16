import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cartsummary';
import CheckoutForm from './checkoutform';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      },
      cart: []
    };
    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
  }

  componentDidMount() {
    fetch('/api/health-check');
    this.getCartItems();

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
            name: 'catalog',
            params: {}
          }
        }
        ));
        this.setState(previousState => ({
          cart: []
        }));
      });
  }

  bodyToRender() {
    let view;
    if (this.state.view.name === 'catalog') {
      view = <ProductList setView={this.setView} />;
    } else if (this.state.view.name === 'cart') {
      view = <CartSummary setView={this.setView} items={this.state.cart}/>;
    } else if (this.state.view.name === 'checkout') {
      view = <CheckoutForm placeOrder={this.placeOrder} items={this.state.cart} setView={this.setView} />;
    } else {
      view = <ProductDetails setView={this.setView} view={this.state.view.params} button={this.addToCart}/>;
    }
    return view;
  }

  render() {
    const element = this.bodyToRender();
    return (
      <div>
        <Header name="Wicked Sales" cart={this.state.cart.length} onClick={this.setView}/>,
        {element}
      </div>
    );
  }
}

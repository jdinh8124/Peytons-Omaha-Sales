import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
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

  bodyToRender() {
    let view;
    if (this.state.view.name === 'catalog') {
      view = <ProductList setView={this.setView} />;
    } else {
      view = <ProductDetails setView={this.setView} view={this.state.view.params} button={this.addToCart}/>;
    }
    return view;
  }

  render() {
    const element = this.bodyToRender();
    return (
      <div>
        <Header name="Wicked Sales" cart={this.state.cart.length}/>,
        {element}
      </div>
    );
  }
}

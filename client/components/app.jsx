import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cartsummary';
import CheckoutForm from './checkoutform';
import IntroModal from './intromodal';
import Confirmation from './confirmation';
import {
  Switch,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';

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
    this.deleteAllItems = this.deleteAllItems.bind(this);
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
    event.preventDefault();
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
        let found = false;
        const newArray = [...this.state.cart];
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
          this.setState(previousState => ({
            cart: newArray
          }));
        } else {
          myJson.quantity = 1;
          myJson.ids = [myJson.cartItemId];
          newArray.push(myJson);
          this.setState(previousState => ({
            cart: newArray
          }));
        }
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

  deleteAllItems(products) {
    products.ids.map(ids =>

      fetch('/api/cart', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ cartItemId: ids })
      })

    );

    const newArray = [...this.state.cart];
    const indexMatch = newArray.findIndex(items =>
      items.productId === products.productId);
    newArray.splice(indexMatch, 1);
    this.setState(previousState => ({
      cart: newArray
    }));
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
          items.ids[0] === product);

        if (newArray[indexMatch].quantity === 1) {
          newArray.splice(indexMatch, 1);
          this.setState(previousState => ({
            cart: newArray
          }));
        } else {
          newArray[indexMatch].quantity -= 1;
          newArray[indexMatch].ids.shift();
          newArray[indexMatch].cartItemId = newArray[indexMatch].ids[0];
          this.setState(previousState => ({
            cart: newArray
          }));
        }
      })
      .catch(reason => {
        console.error(reason.message);
      });
  }

  cartItemsCount() {
    let quantityGroup = 0;
    this.state.cart.map(items => {
      quantityGroup += items.quantity
      ;
    });
    return quantityGroup;
  }

  render() {
    return (
      <div>
        {this.showIntroModal()}
        <Router >
          <Header name="Peyton's Omaha Sales" cart={this.cartItemsCount()} onClick={this.setView}/>
          <Switch>
            <Route exact path="/" render={props => <ProductList {...props} setView={this.setView} />} />;
            <Route exact path="/cartSummary" render={props => <CartSummary {...props} setView={this.setView} items={this.state.cart} add={this.addToCart} delete={this.deleteItem} deleteAll={this.deleteAllItems} />} />;
            <Route exact path="/checkoutForm" render={props => <CheckoutForm {...props} placeOrder={this.placeOrder} items={this.state.cart} setView={this.setView} />} />;
            <Route exact path="/confirmation" render={props => <Confirmation {...props} setView={this.setViewFromConfirm} items={this.state.previousCart} />} />;
            <Route exact path="/productDetails" render={props => <ProductDetails {...props} setView={this.setView} view={this.state.view.params} button={this.addToCart} />} />;
          </Switch>
        </Router>
      </div>
    );
  }
}

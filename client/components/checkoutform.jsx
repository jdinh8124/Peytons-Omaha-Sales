import React from 'react';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      shippingAddress: ''
    };
    this.backToMainShop = this.backToMainShop.bind(this);
    this.onClickPlaceOrder = this.onClickPlaceOrder.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleShippingChange = this.handleShippingChange.bind(this);
    this.handleCreditCardChange = this.handleCreditCardChange.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleShippingChange(event) {
    this.setState({ creditCard: event.target.value });
  }

  handleCreditCardChange(event) {
    this.setState({ shippingAddress: event.target.value });
  }

  onClickPlaceOrder() {
    event.preventDefault();
    if (this.state.name === '' || this.state.course === '' || this.state.grade === '') {
      return;
    }
    const objectInfo = {
      name: this.state.name,
      creditCard: this.state.creditCard,
      shippingAddress: this.state.shippingAddress
    };
    this.props.placeOrder(objectInfo);
    this.setState({ name: '', creditCard: '', shippingAddress: '' });
  }

  priceTotal() {
    let total = 0;
    this.props.items.map(items => {
      total += parseInt(items.price * items.quantity);
    });
    return (total / 100).toFixed(2);
  }

  backToMainShop() {
    this.props.setView('catalog', {});
  }

  render() {
    return (
      <>
        <div className="col-3 offset-3 mb-5">
          <h1>Checkout</h1>
          <h2>Order Total: ${this.priceTotal()}</h2>
        </div>
        <form onSubmit={this.onClickPlaceOrder} className="col-6 offset-3">
          <div className="form-group">
            <label>Name</label>
            <input onChange={this.handleNameChange} type="name" className="form-control" aria-describedby="emailHelp" placeholder="Enter Name"/>
          </div>
          <div className="form-group">
            <label >CreditCard</label>
            <input type="password" onChange={this.handleCreditCardChange} className="form-control" placeholder="Credit Card Number" />
          </div>
          <div className="form-group">
            <label>Shipping Address</label>
            <textarea className="form-control" onChange={this.handleShippingChange} rows="5" id="comment" placeholder="Address"></textarea>
          </div>
          <div className="row mt-5">
            <h3 className="pointer" onClick={this.backToMainShop}>{'< Continue Shopping'}</h3>
            <button className="btn btn-primary offset-7">Submit</button>
          </div>
        </form>
      </>
    );
  }
}

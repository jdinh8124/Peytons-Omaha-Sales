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
            <label >Email</label>
            <input onChange={this.handleCreditCardChange} className="form-control" placeholder="Email" />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="tele" onChange={this.handleCreditCardChange} className="form-control" placeholder="123456" />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input onChange={this.handleCreditCardChange} className="form-control" placeholder="9200 Irvine St." />
          </div>
          <div className="form-group">
            <label>Address 2</label>
            <input onChange={this.handleCreditCardChange} className="form-control" placeholder="Apartment Suite, Studio, or Floor" />
          </div>
          <div className="form-group">
            <label>City</label>
            <input onChange={this.handleCreditCardChange} className="form-control" placeholder="City" />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <select className="form-control" name="state">
              <option>Choose State...</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Flordia</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="IA">Kansas</option>
              <option value="KS">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
          </div>
          <hr className="my-4"></hr>
          <h3>Payment</h3>
          <div className="form-group">
            <label>Name on Card</label>
            <input type="name" className="form-control" aria-describedby="" placeholder="John Doe" />
          </div>
          <div className="form-group">
            <label>Card Number</label>
            <input type="tele" className="form-control" aria-describedby="card number" placeholder="12345668495" />
          </div>
          <div className="form-group">
            <label>Month</label>
            <select className="form-control">
              <option>##</option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
            <label>Year</label>
            <select className="form-control">
              <option>####</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
            </select>
            <label>CVC</label>
            <input type="tele" className="form-control" aria-describedby="card number" placeholder="###" />
          </div>
          <hr className="my-4"></hr>
          <input className="form-check-input" type="checkbox" required />
          <label>
            I acknowledge that this is a demo application, and the information above is not my genuine financial or personal information.
          </label>
          <hr className="my-4"></hr>
          <div className="row mt-5">
            <h3 className="pointer" onClick={this.backToMainShop}>{'< Continue Shopping'}</h3>
            <button className="btn btn-primary offset-7">Submit</button>
          </div>
        </form>
      </>
    );
  }
}

import React from 'react';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      creditCard: '',
      phone: '',
      shippingAddress: '',
      shippingAddressTwo: '',
      zip: '',
      city: '',
      country: 'USA',
      creditCardName: '',
      state: '',
      month: '',
      year: '',
      cvc: '',
      empty: false,
      nameError: false,
      emailError: false,
      phoneError: false,
      addressError: false,
      creditError: false,
      cvcError: false,
      cityError: false
    };
    this.backToMainShop = this.backToMainShop.bind(this);
    this.onClickPlaceOrder = this.onClickPlaceOrder.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePrimaryShippingChange = this.handlePrimaryShippingChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleSecondaryShippingChange = this.handleSecondaryShippingChange.bind(this);
    this.handleZipChange = this.handleZipChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleCreditChange = this.handleCreditChange.bind(this);
    this.handleNameOnCardChange = this.handleNameOnCardChange.bind(this);
    this.handleMonthChange = this.handleMonthChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
    this.handleCvcChange = this.handleCvcChange.bind(this);
    this.setInputFilter = this.setInputFilter.bind(this);
    this.handleCountryChange = this.handleCountryChange.bind(this);

  }

  isFormEmpty() {
    if (this.state.empty) {
      return (
        <div className="invalid-feedback showError mb-3 warningDiv">
          You Have Empty Fields
        </div>
      );
    }
  }

  handleNameChange(event) {
    this.setState({ nameError: false });
    this.setState({ name: event.target.value });
  }

  handleEmailChange(event) {
    this.setState({ emailError: false });
    this.setState({ email: event.target.value });
  }

  handlePhoneChange(event) {
    this.setInputFilter(document.getElementById('phone'), function (value) {
      return /^-?\d*$/.test(value);
    });
    if (!Number(event.target.value)) {
      return;
    }
    this.setState({ phoneError: false });
    this.setState({ phone: event.target.value });
  }

  handlePrimaryShippingChange(event) {
    this.setState({ addressError: false });
    this.setState({ shippingAddress: event.target.value });
  }

  handleSecondaryShippingChange(event) {
    this.setState({ shippingAddressTwo: event.target.value });
  }

  handleZipChange(event) {
    this.setInputFilter(document.getElementById('zip'), function (value) {
      return /^-?\d*$/.test(value);
    });
    if (!Number(event.target.value)) {
      return;
    }
    this.setState({ zip: event.target.value });
  }

  handleCityChange(event) {
    this.setState({ cityError: false });
    this.setState({ city: event.target.value });
  }

  handleStateChange(event) {
    this.setState({ state: event.target.value });
  }

  handleCountryChange(event) {
    this.setState({ country: event.target.value });
  }

  handleNameOnCardChange(event) {
    this.setState({ creditCardName: event.target.value });
  }

  handleCreditChange(event) {
    this.setInputFilter(document.getElementById('creditCard'), function (value) {
      return /^-?\d*$/.test(value);
    });
    if (!Number(event.target.value)) {
      return;
    }
    this.setState({ creditError: false });
    this.setState({ creditCard: event.target.value });
  }

  handleMonthChange(event) {
    this.setState({ month: event.target.value });
  }

  handleYearChange(event) {
    this.setState({ year: event.target.value });
  }

  handleCvcChange(event) {
    this.setInputFilter(document.getElementById('cvc'), function (value) {
      return /^-?\d*$/.test(value);
    });
    if (!Number(event.target.value)) {
      return;
    }
    this.setState({ cvcError: false });
    this.setState({ cvc: event.target.value });
  }

  setInputFilter(textbox, inputFilter) {
    ['input'].forEach(function (event) {
      textbox.addEventListener(event, function () {
        if (inputFilter(this.value)) {
          this.oldValue = this.value;
          this.oldSelectionStart = this.selectionStart;
          this.oldSelectionEnd = this.selectionEnd;
        } else if (Object.prototype.hasOwnProperty.call(textbox, 'oldValue')) {
          this.value = this.oldValue;
          this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        } else {
          this.value = '';
        }
      });
    });
  }

  onClickPlaceOrder() {
    let issues = false;
    event.preventDefault();
    if (this.state.name === '' || this.state.email === '' || this.state.creditCard === '' || this.state.phone === '' || this.state.shippingAddress === '' ||
      this.state.city === '' || this.state.creditCardName === '' || this.state.state === '' || this.state.month === '' || this.state.year === '' || this.state.cvc === '') {
      this.setState(previousState => ({ empty: true }));
      issues = true;
      return;
    } else {
      this.setState(previousState => ({ empty: false }));
    }

    const myString = this.state.name;
    const noSpaceText = myString.replace(/ /g, '');
    const textLength = noSpaceText.length;
    if (textLength < 5) {
      this.setState(previousState => ({ nameError: true }));
      issues = true;
    } else {
      this.setState(previousState => ({ nameError: false }));
    }

    const address = this.state.shippingAddress;
    const noSpace = address.replace(/ /g, '');
    const addressLength = noSpace.length;
    if (addressLength < 6) {
      this.setState(previousState => ({ addressError: true }));
      issues = true;
    } else {
      this.setState(previousState => ({ addressError: false }));
    }

    const re = /\S+@\S+\.\S+/;
    const emailString = this.state.email;
    const noSpaceEmail = emailString.replace(/ /g, '');
    const emailTextLength = noSpaceEmail.length;
    if (!re.test(this.state.email) || emailTextLength < 6) {
      this.setState(previousState => ({ emailError: true }));
      issues = true;
    } else {
      this.setState(previousState => ({ emailError: false }));
    }
    if (this.state.phone.length < 10) {
      this.setState(previousState => ({ phoneError: true }));
      issues = true;
    } else {
      this.setState(previousState => ({ phoneError: false }));
    }

    if (this.state.creditCard.length < 16) {
      this.setState(previousState => ({ creditError: true }));
      issues = true;
    } else {
      this.setState(previousState => ({ creditError: false }));
    }

    if (this.state.zip.length < 5) {
      this.setState(previousState => ({ zipError: true }));
      issues = true;
    } else {
      this.setState(previousState => ({ zipError: false }));
    }

    if (this.state.cvc.length < 3) {
      this.setState(previousState => ({ cvcError: true }));
      issues = true;
    } else {
      this.setState(previousState => ({ cvcError: false }));
    }

    const cityString = this.state.city;
    const noSpaceCity = cityString.replace(/ /g, '');
    const cityTextLength = noSpaceCity.length;
    if (cityTextLength < 3) {
      this.setState(previousState => ({ cityError: true }));
      issues = true;
    } else {
      this.setState(previousState => ({ cityError: false }));
    }

    if (issues) {
      return;
    }

    const objectInfo = {
      name: this.state.name,
      creditCard: this.state.creditCard,
      shippingAddress: `${this.state.shippingAddress} ${this.state.shippingAddressTwo} ${this.state.zip} ${this.state.city} ${this.state.state} ${this.state.country}`
    };
    this.props.placeOrder(objectInfo);
    this.setState({
      name: '',
      email: '',
      creditCard: '',
      phone: '',
      shippingAddress: '',
      shippingAddressTwo: '',
      zip: '',
      city: '',
      country: 'USA',
      creditCardName: '',
      state: '',
      month: '',
      year: '',
      cvc: ''
    });
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

  isNameValid() {
    if (this.state.nameError) {
      return (
        <div className="invalid-feedback showError mb-3 warningDiv">
          Name was too short
        </div>
      );
    }
  }

  isThereAnEmailError() {
    if (this.state.emailError) {
      return (
        <div className="invalid-feedback showError mb-3 warningDiv">
          Your Email Was Not Valid
        </div>
      );
    }
  }

  isThereAPhoneError() {
    if (this.state.phoneError) {
      return (
        <div className="invalid-feedback showError mb-3 warningDiv">
          Your Phone Number Was invalid
        </div>
      );
    }
  }

  isAddressValid() {
    if (this.state.addressError) {
      return (
        <div className="invalid-feedback showError mb-3 warningDiv">
          Your Address was invalid
        </div>
      );
    }
  }

  isCityValid() {
    if (this.state.cityError) {
      return (
        <div className="invalid-feedback showError mb-3 warningDiv">
          Your city was invalid in length
        </div>
      );
    }
  }

  isCreditValid() {
    if (this.state.creditError) {
      return (
        <div className="invalid-feedback showError mb-3 warningDiv">
          Your Credit Card Number Was invalid
        </div>
      );
    }
  }

  isZipValid() {
    if (this.state.zipError) {
      return (
        <div className="invalid-feedback showError mb-3 warningDiv">
          Your Zip Code was invalid
        </div>
      );
    }
  }

  iscvcValid() {
    if (this.state.cvcError) {
      return (
        <div className="invalid-feedback showError mb-3 warningDiv">
          CVC was too short
        </div>
      );
    }
  }

  buttonToRender() {
    if (this.state.name !== '' || this.state.email !== '' || this.state.creditCard !== '' || this.state.phone !== '' || this.state.shippingAddress !== '' ||
      this.state.city !== '' || this.state.creditCardName !== '' || this.state.state !== '' || this.state.month !== '' || this.state.year !== '' || this.state.cvc !== '') {
      return <button className="btn btn-primary offset-lg-5 offset-sm-1 d-inline ">Submit</button>;
    } else {
      return <button disabled="false" className="btn btn-primary offset-lg-5 offset-sm-1 d-inline ">Submit</button>;
    }
  }

  render() {
    return (
      <>
        <div className="col-sm-12 col-md-6 offset-md-4 offset-lg-3 mb-5">
          <h1>Checkout</h1>
          <h2>Order Total: ${this.priceTotal()}</h2>
        </div>
        <form onSubmit={this.onClickPlaceOrder} className="col-10 offset-1">
          <div className="row">
            <div className="form-group col-xl-4">
              <label>Name</label>
              <input onChange={this.handleNameChange} type="name" className="form-control" aria-describedby="emailHelp" placeholder="Enter Name" maxLength="65"/>
              {this.isNameValid()}
            </div>
            <div className="form-group col-xl-4">
              <label >Email</label>
              <input onChange={this.handleEmailChange} className="form-control" placeholder="Email" maxLength="254" />
              {this.isThereAnEmailError()}
            </div>
            <div className="form-group col-xl-3">
              <label>Phone Number</label>
              <input id="phone" onChange={this.handlePhoneChange} className="form-control" placeholder="7149090000" maxLength="10" />
              {this.isThereAPhoneError()}
            </div>
          </div>

          <div className="form-group">
            <label>Address</label>
            <input onChange={this.handlePrimaryShippingChange} className="form-control" placeholder="9200 Irvine St." maxLength="42" />
            {this.isAddressValid()}
          </div>
          <div className="form-group">
            <label>Address 2</label>
            <input onChange={this.handleSecondaryShippingChange} className="form-control" placeholder="Apartment Suite, Studio, or Floor" maxLength="42" />
          </div>
          <div className="row">
            <div className="form-group col-xl-2">
              <label>Five Digit Zip Code</label>
              <input onChange={this.handleZipChange} id="zip" className="form-control" placeholder="92000" maxLength="5" />
              {this.isZipValid()}
            </div>
            <div className="form-group col-xl-3">
              <label>City</label>
              <input onChange={this.handleCityChange} className="form-control" placeholder="City" maxLength="50"/>
              {this.isCityValid()}
            </div>
            <div className="form-group col-xl-4">
              <label htmlFor="state">State</label>
              <select onChange={this.handleStateChange} className="form-control" name="state">
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
            <div className="form-group col-xl-2">
              <label>Country</label>
              <input onChange={this.handleCountryChange} className="form-control" value="USA" placeholder="USA" maxLength="15" />
            </div>
          </div>
          <hr className="my-4"></hr>
          <h3>Payment</h3>
          <div className="row">
            <div className="form-group col-xl-5">
              <label>Name on Card</label>
              <input type="name" onChange={this.handleNameOnCardChange} className="form-control" aria-describedby="" placeholder="John Doe" />
            </div>
            <div className="form-group col-xl-5">
              <label>Card Number</label>
              <input onChange={this.handleCreditChange} id="creditCard" className="form-control" aria-describedby="card number" placeholder="12345668495" maxLength="16"/>
              {this.isCreditValid()}
            </div>
          </div>
          <div className="row">
            <div className="form-group col-xl-3">
              <label>Month</label>
              <select onChange={this.handleMonthChange} className="form-control">
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
            </div>

            <div className="col-xl-3">
              <label>Year</label>
              <select onChange={this.handleYearChange} className="form-control">
                <option>####</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
              </select>
            </div>
            <div className="col-xl-3">

              <label>CVC</label>
              <input onChange={this.handleCvcChange} id="cvc" className="form-control" aria-describedby="card number" placeholder="###" maxLength="3" />
              {this.iscvcValid()}
              {this.isFormEmpty()}
            </div>
          </div>
          <div >
            <hr className="my-4"></hr>
            <input className="form-check-input" type="checkbox" required />
            <label>
            I acknowledge that this is a demo application, and the information above is not my genuine financial or personal information.
            </label>
            <hr className="my-4"></hr>
            <div className="mt-5 mb-5">
              <h3 className="pointer d-inline small-checkout mr-3" onClick={this.backToMainShop}>{'<Continue Shopping'}</h3>
              {this.buttonToRender()}
            </div>
          </div>

        </form>
      </>
    );
  }
}

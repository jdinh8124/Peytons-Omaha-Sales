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
      creditNameError: false,
      stateError: false,
      creditError: false,
      monthError: false,
      yearError: false,
      cvcError: false,
      cityError: false,
      paused: true
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
    this.checkForErrors = this.checkForErrors.bind(this);

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
    this.setState({
      nameError: false,
      paused: false
    });
    this.setState({ name: event.target.value });
    setTimeout(function () {
      this.setState({ paused: true });
    }.bind(this), 1000);
  }

  handleEmailChange(event) {
    this.setState({ emailError: false, paused: false });
    this.setState({ email: event.target.value });
    setTimeout(function () {
      this.setState({ paused: true });
    }.bind(this), 1000);
  }

  handlePhoneChange(event) {
    this.setInputFilter(document.getElementById('phone'), function (value) {
      return /^-?\d*$/.test(value);
    });
    if (!Number(event.target.value)) {
      return;
    }
    this.setState({ phoneError: false, paused: false });
    this.setState({ phone: event.target.value });
    setTimeout(function () {
      this.setState({ paused: true });
    }.bind(this), 1000);
  }

  handlePrimaryShippingChange(event) {
    this.setState({ addressError: false, paused: false });
    this.setState({ shippingAddress: event.target.value });
    setTimeout(function () {
      this.setState({ paused: true });
    }.bind(this), 1000);
  }

  handleSecondaryShippingChange(event) {
    this.setState({ paused: false });
    this.setState({ shippingAddressTwo: event.target.value });
    setTimeout(function () {
      this.setState({ paused: true });
    }.bind(this), 1000);
  }

  handleZipChange(event) {
    this.setInputFilter(document.getElementById('zip'), function (value) {
      return /^-?\d*$/.test(value);
    });
    if (!Number(event.target.value)) {
      return;
    }
    this.setState({ zipError: false, paused: false });
    this.setState({ zip: event.target.value });
    setTimeout(function () {
      this.setState({ paused: true });
    }.bind(this), 1000);
  }

  handleCityChange(event) {
    this.setState({ cityError: false, paused: false });
    this.setState({ city: event.target.value });
    setTimeout(function () {
      this.setState({ paused: true });
    }.bind(this), 1000);
  }

  handleStateChange(event) {
    this.setState({ stateError: false, paused: false });
    this.setState({ state: event.target.value });
    setTimeout(function () {
      this.setState({ paused: true });
    }.bind(this), 1000);
  }

  handleCountryChange(event) {
    this.setState({ country: event.target.value });
  }

  handleNameOnCardChange(event) {
    this.setState({ creditNameError: false, paused: false });
    this.setState({ creditCardName: event.target.value });
    setTimeout(function () {
      this.setState({ paused: true });
    }.bind(this), 1000);
  }

  handleCreditChange(event) {
    this.setInputFilter(document.getElementById('creditCard'), function (value) {
      return /^-?\d*$/.test(value);
    });
    if (!Number(event.target.value)) {
      return;
    }
    this.setState({ creditError: false, paused: false });
    this.setState({ creditCard: event.target.value });
    setTimeout(function () {
      this.setState({ paused: true });
    }.bind(this), 1000);
  }

  handleMonthChange(event) {
    this.setState({ monthError: false, paused: false });
    this.setState({ month: event.target.value });
    setTimeout(function () {
      this.setState({ paused: true });
    }.bind(this), 1000);
  }

  handleYearChange(event) {
    this.setState({ yearError: false, paused: false });
    this.setState({ year: event.target.value });
    setTimeout(function () {
      this.setState({ paused: true });
    }.bind(this), 1000);
  }

  handleCvcChange(event) {
    this.setInputFilter(document.getElementById('cvc'), function (value) {
      return /^-?\d*$/.test(value);
    });
    if (!Number(event.target.value)) {
      return;
    }
    this.setState({ cvcError: false, paused: false });
    this.setState({ cvc: event.target.value });
    setTimeout(function () {
      this.setState({ paused: true });
    }.bind(this), 1000);
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

  nameErrorCheck(myString, issues) {
    myString = this.state.name;
    const noSpaceText = myString.replace(/ /g, '');
    const textLength = noSpaceText.length;
    if (textLength < 5) {
      this.setState(previousState => ({ nameError: true }));
      if (issues || issues === false) {
        issues = true;
        return issues;
      }
    } else {
      this.setState(previousState => ({ nameError: false }));
    }
  }

  emailErrorCheck(emailString, issues) {
    const re = /\S+@\S+\.\S+/;
    const noSpaceEmail = emailString.replace(/ /g, '');
    const emailTextLength = noSpaceEmail.length;
    if (!re.test(this.state.email) || emailTextLength < 6) {
      this.setState(previousState => ({ emailError: true }));
      if (issues || issues === false) {
        issues = true;
        return issues;
      }
    } else {
      this.setState(previousState => ({ emailError: false }));
    }
  }

  numberErrorCheck(phone, issues) {
    if (phone < 10) {
      this.setState(previousState => ({ phoneError: true }));
      issues = true;
    } else {
      this.setState(previousState => ({ phoneError: false }));
    }
  }

  addressErrorCheck(issues) {
    const address = this.state.shippingAddress;
    const noSpace = address.replace(/ /g, '');
    const addressLength = noSpace.length;
    if (addressLength < 6) {
      this.setState(previousState => ({ addressError: true }));
      if (issues || issues === false) {
        issues = true;
        return issues;
      }
    } else {
      this.setState(previousState => ({ addressError: false }));
    }
  }

  zipErrorCheck(issues) {
    if (this.state.zip.length < 5) {
      this.setState(previousState => ({ zipError: true }));
      if (issues || issues === false) {
        issues = true;
        return issues;
      }
    } else {
      this.setState(previousState => ({ zipError: false }));
    }
  }

  cityErrorCheck(issues) {
    const cityString = this.state.city;
    const noSpaceCity = cityString.replace(/ /g, '');
    const cityTextLength = noSpaceCity.length;
    if (cityTextLength < 3) {
      this.setState(previousState => ({ cityError: true }));
      if (issues || issues === false) {
        issues = true;
        return issues;
      }
    } else {
      this.setState(previousState => ({ cityError: false }));
    }
  }

  stateErrorCheck(issues) {
    if (this.state.state === '') {
      this.setState(previousState => ({ stateError: true }));
      if (issues || issues === false) {
        issues = true;
        return issues;
      }
    } else {
      this.setState(previousState => ({ stateError: false }));
    }
  }

  nameCreditCheck(issues) {
    if (this.state.creditCardName.length < 5) {
      this.setState(previousState => ({ creditNameError: true }));
      if (issues || issues === false) {
        issues = true;
        return issues;
      }
    } else {
      this.setState(previousState => ({ creditNameError: false }));
    }
  }

  creditCheck(issues) {
    if (this.state.creditCard.length < 16) {
      this.setState(previousState => ({ creditError: true }));
      if (issues || issues === false) {
        issues = true;
        return issues;
      }
    } else {
      this.setState(previousState => ({ creditError: false }));
    }
  }

  monthCheck(issues) {
    if (this.state.month === '') {
      this.setState(previousState => ({ monthError: true }));
      if (issues || issues === false) {
        issues = true;
        return issues;
      }
    } else {
      this.setState(previousState => ({ monthError: false }));
    }
  }

  yearCheck(issues) {
    if (this.state.year === '') {
      this.setState(previousState => ({ yearError: true }));
      if (issues || issues === false) {
        issues = true;
        return issues;
      }
    } else {
      this.setState(previousState => ({ yearError: false }));
    }
  }

  cvcCheck(issues) {
    if (this.state.cvc.length < 3) {
      this.setState(previousState => ({ cvcError: true }));
      if (issues || issues === false) {
        issues = true;
        return issues;
      }
    } else {
      this.setState(previousState => ({ cvcError: false }));
    }
  }

  checkForErrors() {
    this.nameErrorCheck(this.state.name);
    this.emailErrorCheck(this.state.email);
    this.numberErrorCheck(this.state.phone.length);
    this.addressErrorCheck();
    this.zipErrorCheck();
    this.cityErrorCheck();
    this.stateErrorCheck();
    this.nameCreditCheck();
    this.creditCheck();
    this.yearCheck();
    this.monthCheck();
    this.cvcCheck();
  }

  onClickPlaceOrder() {
    let issues = false;
    event.preventDefault();

    this.checkForErrors();

    if (this.state.name === '' || this.state.email === '' || this.state.creditCard === '' || this.state.phone === '' || this.state.shippingAddress === '' ||
      this.stat.city === '' || this.state.creditCardName === '' || this.state.state === '' || this.state.month === '' || this.state.year === '' || this.state.cvc === '') {
      this.setState(previousState => ({ empty: true }));
      issues = true;
    } else {
      this.setState(previousState => ({ empty: false }));
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
        <div className="invalid-feedback showError mb-3 mt-1 warningDiv">
          Name was too short
        </div>
      );
    }
  }

  isThereAnEmailError() {
    if (this.state.emailError) {
      return (
        <div className="invalid-feedback showError mb-3 mt-1 warningDiv">
          Your Email Was Not Valid
        </div>
      );
    }
  }

  isThereAPhoneError() {
    if (this.state.phoneError) {
      return (
        <div className="invalid-feedback showError mb-3 mt-1 warningDiv">
          Your Phone Number Was Too Short
        </div>
      );
    }
  }

  isAddressValid() {
    if (this.state.addressError) {
      return (
        <div className="invalid-feedback showError mb-3 mt-1 warningDiv">
          Your Address was invalid
        </div>
      );
    }
  }

  isCityValid() {
    if (this.state.cityError) {
      return (
        <div className="invalid-feedback showError mb-3 mt-1 warningDiv">
          Your city was invalid in length
        </div>
      );
    }
  }

  isCreditValid() {
    if (this.state.creditError) {
      return (
        <div className="invalid-feedback showError mb-3 mt-1 warningDiv">
          Your Credit Card Number Was Too Short!
        </div>
      );
    }
  }

  isZipValid() {
    if (this.state.zipError) {
      return (
        <div className="invalid-feedback showError mb-3 mt-1 warningDiv">
          Your Zip Code was too short!
        </div>
      );
    }
  }

  isStateValid() {
    if (this.state.stateError) {
      return (
        <div className="invalid-feedback showError mb-3 mt-1 warningDiv">
          Please Choose a State!
        </div>
      );
    }
  }

  isMonthValid() {
    if (this.state.monthError) {
      return (
        <div className="invalid-feedback showError mb-3 mt-1 warningDiv">
          Please Choose a Month!
        </div>
      );
    }
  }

  isYearValid() {
    if (this.state.yearError) {
      return (
        <div className="invalid-feedback showError mb-3 mt-1 warningDiv">
          Please Choose a Year!
        </div>
      );
    }
  }

  iscvcValid() {
    if (this.state.cvcError) {
      return (
        <div className="invalid-feedback showError mb-3 mt-1 warningDiv">
          CVC was too short
        </div>
      );
    }
  }

  isNameCreditValid() {
    if (this.state.creditNameError) {
      return (
        <div className="invalid-feedback showError mb-3 mt-1 warningDiv">
          Your Credit Card Name Information is too short
        </div>
      );
    }
  }

  buttonToRender() {
    if (this.state.paused && this.state.name !== '' && this.state.email !== '' && this.state.creditCard.length === 16 && this.state.phone !== '' && this.state.shippingAddress !== '' &&
      this.state.city !== '' && this.state.creditCardName !== '' && this.state.state !== '' && this.state.month !== '' && this.state.year !== '' && this.state.cvc.length === 3 &&
      this.state.nameError === false && this.state.emailError === false && this.state.phoneError === false && this.state.addressError === false &&
      this.state.creditError === false && this.state.cvcError === false && this.state.cityError === false && this.state.zipError === false
    ) {
      return <button onClick={this.onClickPlaceOrder} className="btn btn-primary offset-lg-5 offset-sm-1 d-inline ">Submit</button>;
    } else {
      return (
        <button disabled={true} className="btn btn-primary offset-lg-5 offset-sm-1 d-inline" ><div onClick={this.checkForErrors}>Submit</div></button>
      );
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
              <input onChange={this.handleNameChange} onBlur={() => this.nameErrorCheck(this.state.name)} type="name" className="form-control" aria-describedby="emailHelp" placeholder="Enter Name" maxLength="65"/>
              {this.isNameValid()}
            </div>
            <div className="form-group col-xl-4">
              <label >Email</label>
              <input onChange={this.handleEmailChange} onBlur={() => this.emailErrorCheck(this.state.email)} className="form-control" placeholder="Email" maxLength="254" />
              {this.isThereAnEmailError()}
            </div>
            <div className="form-group col-xl-3">
              <label>Phone Number</label>
              <input id="phone" onChange={this.handlePhoneChange} onBlur={() => this.numberErrorCheck(this.state.phone)} className="form-control" placeholder="7149090000" maxLength="10" />
              {this.isThereAPhoneError()}
            </div>
          </div>

          <div className="form-group">
            <label>Address</label>
            <input onChange={this.handlePrimaryShippingChange} onBlur={() => this.addressErrorCheck()} className="form-control" placeholder="9200 Irvine St." maxLength="42" />
            {this.isAddressValid()}
          </div>
          <div className="form-group">
            <label>Address 2</label>
            <input onChange={this.handleSecondaryShippingChange} className="form-control" placeholder="Apartment Suite, Studio, or Floor" maxLength="42" />
          </div>
          <div className="row">
            <div className="form-group col-xl-2">
              <label>Five Digit Zip Code</label>
              <input onChange={this.handleZipChange} onBlur={() => this.zipErrorCheck()} id="zip" className="form-control" placeholder="92000" maxLength="5" />
              {this.isZipValid()}
            </div>
            <div className="form-group col-xl-3">
              <label>City</label>
              <input onChange={this.handleCityChange} onBlur={() => this.cityErrorCheck()} className="form-control" placeholder="City" maxLength="50"/>
              {this.isCityValid()}
            </div>
            <div className="form-group col-xl-4">
              <label htmlFor="state">State</label>
              <select onChange={this.handleStateChange} onBlur={() => this.stateErrorCheck()} className="form-control" name="state">
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
              {this.isStateValid()}
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
              <input type="name" onChange={this.handleNameOnCardChange} onBlur={() => this.nameCreditCheck()} className="form-control" aria-describedby="" placeholder="John Doe" />
              {this.isNameCreditValid()}
            </div>
            <div className="form-group col-xl-5">
              <label>Card Number</label>
              <input onChange={this.handleCreditChange} id="creditCard" onBlur={() => this.creditCheck()} className="form-control" aria-describedby="card number" placeholder="12345668495" maxLength="16"/>
              {this.isCreditValid()}
            </div>
          </div>
          <div className="row">
            <div className="form-group col-xl-3">
              <label>Month</label>
              <select onChange={this.handleMonthChange} onBlur={() => this.monthCheck()} className="form-control">
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
              {this.isMonthValid()}
            </div>

            <div className="col-xl-3">
              <label>Year</label>
              <select onChange={this.handleYearChange} onBlur={() => this.yearCheck()} className="form-control">
                <option>####</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
              </select>
              {this.isYearValid()}
            </div>
            <div className="col-xl-3">

              <label>CVC</label>
              <input onChange={this.handleCvcChange} id="cvc" onBlur={() => this.cvcCheck()} className="form-control" aria-describedby="card number" placeholder="###" maxLength="3" />
              {this.iscvcValid()}
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

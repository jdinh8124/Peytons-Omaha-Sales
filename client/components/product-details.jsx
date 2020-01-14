import React from 'react';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
    this.changeBackToCat = this.changeBackToCat.bind(this);
  }

  componentDidMount() {
    fetch(`/api/products/${this.props.view.productId}`)
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.setState({
          product: myJson
        });
      })
      .catch(error => console.error(error.message));
  }

  changeBackToCat() {
    this.props.setView('catalog', {});
  }

  render() {
    if (this.state.product) {
      return (
        <div className="card m-5 col-11" >
          <div className="pointer" onClick={this.changeBackToCat}> {'< Back to Catalog'}</div>
          <div className="row">
            <div className="col-4">
              <img src={this.state.product.image} className="ml-1 fit-single-image" alt="Image of Product" />
            </div>
            <div className="col-7">
              <h5 className="card-title ">{this.state.product.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted ">${(this.state.product.price / 100).toFixed(2)}</h6>
              <p className="card-text">{this.state.product.shortDescription}</p>
            </div>
          </div>
          <div className="card-body">
            <p className="card-text">{this.state.product.longDescription}</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

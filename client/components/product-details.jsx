import React from 'react';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
    this.changeBackToCat = this.changeBackToCat(this);
  }

  ComponentDidMount() {
    fetch(`/api/products/${this.props.view}`)
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.setState(previousState => ({
          product: myJson
        }));
      });
  }

  changeBackToCat() {
    this.props.setView('catalog', {});
  }

  render() {
    if (!this.state.product) {
      return (
        <div className="card w-25 m-4" >
          <p handleClick={this.changeBackToCat}>Back to Catalog</p>
          <img src={this.state.product.image} className="card-img-left fit-image" alt="Image of Product" />
          <div className="card-body">
            <h5 className="card-title">{this.state.product.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">${this.state.product.price}</h6>
            <p className="card-text">{this.state.product.shortDescription}</p>
            <p className="card-text">this.state.product.longDescription</p>
          </div>
        </div>
      );
    }
  }
}

import React from 'react';
import AddCartModal from './addcartmodal';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      modal: false
    };
    this.changeBackToCat = this.changeBackToCat.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
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

  itemBoughtModal() {
    if (this.state.modal) {
      return <AddCartModal name={this.state.product.name} setToCat={this.changeBackToCat} setView={this.props.setView}/>;

    }
  }

  changeBackToCat() {
    this.props.setView('catalog', {});
  }

  handleButtonClick() {
    this.props.button(this.state.product);
    this.setState(previousState => ({
      modal: true
    }));
  }

  checkImgSize() {
    if (this.state.product.productId === 6) {
      return 'fit-eli';
    } else {
      return 'fit-single-image';
    }
  }

  render() {
    const modal = this.itemBoughtModal();
    if (this.state.product) {
      return (
        <>
          {modal}
          <div className="card  m-md-5 col-sm-11 col-md-11" >
            <div className="pointer" onClick={this.changeBackToCat}> {'< Back to Catalog'}</div>
            <div className="row">
              <div className="col-4 mr-1">
                <img src={this.state.product.image} className={this.checkImgSize()} alt="Image of Product" />
              </div>
              <div className="col-7 ml-4">
                <h5 className="card-title ">{this.state.product.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted ">${(this.state.product.price / 100).toFixed(2)}</h6>
                <p className="card-text">{this.state.product.shortDescription}</p>
                <button className="btn btn-primary" onClick={this.handleButtonClick} >Add to Cart</button>
              </div>
            </div>
            <div className="card-body">
              <p className="card-text">{this.state.product.longDescription}</p>
            </div>
          </div>
        </>
      );
    } else {
      return null;
    }
  }
}

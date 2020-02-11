import React from 'react';
import DeleteModal from './deleteConfirmationModal';

export default class CartSummaryItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.deleteItems = this.deleteItems.bind(this);
    this.deleteAllItems = this.deleteAllItems.bind(this);
    this.addItems = this.addItems.bind(this);
    this.setModal = this.setModal.bind(this);
  }

  pictureSize() {
    if (this.props.img === '/images/sharpe.jpg') {
      return <img src={this.props.img} className="fit-single-cart margin-left" alt="Image of Product" />;
    } else {
      return <img src={this.props.img} className=" fit-single-cart" alt="Image of Product" />;
    }
  }

  setModal() {
    this.setState(previousState => ({
      showModal: false
    }));
  }

  openModal() {
    if (this.state.showModal) {
      return <DeleteModal name={this.props.name} picture={this.props.img} delete={this.props.delete} item={this.props.ids[0]} open={this.setModal} />;
    }
  }

  deleteItems(event) {
    if (this.props.quantity !== 1) {
      this.props.delete(this.props.ids[0]);
    } else {
      this.setState(previousState => ({
        showModal: true
      }));
    }
  }

  deleteAllItems(event) {
    const products = {
      productId: this.props.productId,
      ids: this.props.ids
    };
    this.props.deleteAll(products);
  }

  addItems() {
    this.props.add({ productId: this.props.productId });
  }

  render() {
    return (
      <>
        {this.openModal()}
        <div className="col-8 card  col-lg-7 mb-2 mb-lg-5" >
          <div className="row p-3">
            <div className="col-lg-4 offset-2 offset-sm-3  offset-lg-0">
              {this.pictureSize()}
            </div>
            <div className="col-lg-7">
              <h5 className="card-title ">{this.props.name}</h5>
              <h6 className="card-subtitle mb-lg-2 text-muted ">${(this.props.price / 100).toFixed(2)}</h6>
              <p className="card-text">{this.props.shortDescription}</p>
              <div className="offset-3 offset-sm-5 offset-md-4 offset-lg-0">
                <button onClick={this.deleteItems} className="m-1"><i className="fas fa-minus-square"></i></button>
                {this.props.quantity}
                <button onClick={this.addItems}className="m-1"><i className="fas fa-plus-square"></i></button>
              </div>
              <button type="button" onClick={this.deleteAllItems} className="btn btn-danger mt-2 ">Delete</button>

            </div>
          </div>
        </div>
      </>
    );
  }
}

import React from 'react';
import DeleteModal from './deleteConfirmationModal';

export default function CartSummaryItem(props) {
  const [showModal, setShowModal] = React.useState(false);

  const pictureSize = () => {
    if (props.img === '/images/sharpe.jpg') {
      return <img src={props.img} className="fit-single-cart margin-left" alt="Image of Product" />;
    } else {
      return <img src={props.img} className=" fit-single-cart" alt="Image of Product" />;
    }
  };

  const setModal = () => {
    setShowModal(false);
  };

  const openModal = () => {
    if (showModal) {
      return <DeleteModal name={props.name} picture={props.img} delete={props.delete} item={props.ids[0]} open={setModal} />;
    }
  };

  const deleteItems = () => {
    if (props.quantity !== 1) {
      props.delete(props.ids[0]);
    } else {
      setShowModal(true);
    }
  };

  const deleteAllItems = () => {
    const products = {
      productId: props.productId,
      ids: props.ids
    };
    props.deleteAll(products);
  };

  const addItems = () => {
    props.add({ productId: props.productId });
  };

  return (
    <>
      {openModal()}
      <div className="col-8 card  col-lg-7 mb-2 mb-lg-5" >
        <div className="row p-3">
          <div className="col-lg-4 offset-2 offset-sm-3  offset-lg-0">
            {pictureSize()}
          </div>
          <div className="col-lg-7">
            <h5 className="card-title ">{props.name}</h5>
            <h6 className="card-subtitle mb-lg-2 text-muted ">${(props.price / 100).toFixed(2)}</h6>
            <p className="card-text">{props.shortDescription}</p>
            <div className="row no-gutters  justify-content-center justify-content-lg-start mr-3">
              <button onClick={deleteItems} className="m-1"><i className="fas fa-minus-square"></i></button>
              <span className="pt-2">{props.quantity}</span>
              <button onClick={addItems}className="m-1"><i className="fas fa-plus-square"></i></button>
            </div>
            <div className="row no-gutters  justify-content-center justify-content-lg-start mr-3">
              <button type="button" onClick={deleteAllItems} className="btn btn-danger mt-3 ">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

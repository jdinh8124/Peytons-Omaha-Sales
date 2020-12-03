import React, { useEffect } from 'react';
import AddCartModal from './addcartmodal';

export default function ProductDetails(props) {
  const [product, setProduct] = React.useState(null);
  const [showModal, setShowModal] = React.useState(false);

  const isFirstUpdate = React.useRef(true);
  useEffect(() => {
    if (isFirstUpdate.current) {
      isFirstUpdate.current = false;
      fetch(`/api/products/${props.view.productId}`)
        .then(response => {
          return response.json();
        })
        .then(myJson => {
          setProduct(myJson);
        })
        .catch(error => console.error(error.message));
    }
  });

  const itemBoughtModal = () => {
    if (showModal) {
      return <AddCartModal name={product.name} setToCat={changeBackToCat} setView={props.setView}/>;

    }
  };

  const changeBackToCat = () => {
    props.setView('catalog', {});
  };

  const handleButtonClick = () => {
    props.button(product);
    setShowModal(true);
  };

  const checkImgSize = () => {
    if (product.productId === 6 || product.productId === 3 || product.productId === 2 || product.productId === 1) {
      return 'fit-eli';
    } else {
      return 'fit-single-image';
    }
  };

  const itemModal = itemBoughtModal();
  if (product) {
    return (
      <>
        {itemModal}
        <div className="card  m-md-5 col-sm-10 offset-sm-1 offset-md-0 col-md-11" >
          <div className="pointer mb-3" onClick={changeBackToCat}> {'< Back to Catalog'}</div>
          <div className="row">
            <div className="col-4 col-lg-3 offset-lg-1 mr-1">
              <img src={product.image} className={checkImgSize()} alt="Image of Product" />
            </div>
            <div className="col-7 ml-4 ml-sm-3 ml-md-4">
              <h5 className="card-title ">{product.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted ">${(product.price / 100).toFixed(2)}</h6>
              <p className="card-text">{product.shortDescription}</p>
              <button className="btn btn-primary" onClick={handleButtonClick} >Add to Cart</button>
            </div>
          </div>
          <div className="card-body">
            <p className="card-text">{product.longDescription}</p>
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
}

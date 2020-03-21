import React, { useState, useEffect } from 'react';
import ProductListItems from './product-list-item';
export default function ProductLists(props) {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     products: []
  //   };
  // }

  // functioncomponentDidMount() {
  //   getProducts();
  // }
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  });

  function getProducts() {
    fetch('/api/products')
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        // this.setState({
        //   products: myJson

        // });
        setProducts(myJson);
        console.log(myJson);
      })
      .catch(reason => {
        console.error(reason.message);
      });

  }

  function renderCards() {
    const cards = products.map(product => {
      return <ProductListItems name={product.name} cost={(product.price / 100).toFixed(2)} description={product.shortDescription} onClick={this.props.setView} img={product.image} id={product.productId} key={product.productId}/>;
    });
    return cards;
  }

  return (
    <main className="d-flex flex-wrap  justify-content-center mt-3">
      {renderCards()}
    </main>
  );
}

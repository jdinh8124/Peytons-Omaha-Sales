import React, { useEffect } from 'react';
import ProductListItems from './product-list-item';
export default function ProductLists(props) {
  const [products, setProducts] = React.useState([]);

  const isFirstUpdate = React.useRef(true);
  useEffect(() => {
    if (isFirstUpdate.current) {
      isFirstUpdate.current = false;
      getProducts();
    }
  });

  const getProducts = () => {
    fetch('/api/products')
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        setProducts(myJson);
      })
      .catch(reason => {
        console.error(reason.message);
      });

  };

  const renderCards = () => {
    const cards = products.map(product => {
      return <ProductListItems name={product.name} cost={(product.price / 100).toFixed(2)} description={product.shortDescription} onClick={props.setView} img={product.image} id={product.productId} key={product.productId}/>;
    });
    return cards;
  };

  const elements = renderCards();
  return (
    <main className="d-flex flex-wrap  justify-content-center mt-3">
      {elements}
    </main>
  );
}

import React from 'react';
import ProductListItems from './product-list-item';
export default class ProductLists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    fetch('/api/products')
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.setState({
          products: myJson

        });
      })
      .catch(reason => {
        console.error(reason.message);
      });

  }

  renderCards() {
    const cards = this.state.products.map(product => {
      return <ProductListItems name={product.name} cost={(product.price / 100).toFixed(2)} description={product.shortDescription} img={product.image} key={product.productId}/>;
    });
    return cards;
  }

  render() {
    const elements = this.renderCards();
    return (
      <div className="d-flex flex-wrap justify-content-center">
        {elements}
      </div>
    );
  }
}

import React from 'react';
import ProductListItems from './product-list-item';
import Carousel from './carousel';

export default class ProductLists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      pictures: []
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
      return <ProductListItems name={product.name} cost={(product.price / 100).toFixed(2)} description={product.shortDescription} onClick={this.props.setView} img={product.image} id={product.productId} key={product.productId}/>;
    });
    return cards;
  }

  render() {
    const elements = this.renderCards();
    return (
      <main className="d-flex flex-wrap  justify-content-center mt-3">
        {elements}
      </main>
    );
  }
}

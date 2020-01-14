import React from 'react';
import Header from './header';
import ProductList from './product-list';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    fetch('/api/health-check');

  }

  render() {
    return (
      <div>
        <Header name="Wicked Sales"/>,
        <ProductList/>
      </div>
    );
  }
}

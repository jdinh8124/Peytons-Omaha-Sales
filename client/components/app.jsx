import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      }
    };
    this.setView = this.setView.bind(this);
  }

  componentDidMount() {
    fetch('/api/health-check');

  }

  setView(name, params) {
    this.setState(previousState => ({
      name: name,
      params: params
    }));
  }

  render() {
    let view;
    if (this.state.view.name === 'catalog') {
      view = <ProductList setView={this.setView} />;
    } else {
      view = <ProductDetails setView={this.setView} view={this.state.view.params} />;
    }
    return (
      <div>
        <Header name="Wicked Sales"/>,
        {view}
      </div>
    );
  }
}

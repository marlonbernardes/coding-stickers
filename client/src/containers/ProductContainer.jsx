import React, { Component } from 'react';
import { connect } from 'react-redux';

export class ProductContainer extends Component {

  componentDidMount() {
    this.props.changeProductDimensions({
      widthInInches: 14.13,
      heightInInches: 19.73,
    });
  }

  render() {
    return (
      <img id="custom" src="/img/product.jpg" />
    );
  }
}

function mapStateToProps(state) {
  return {
    product: state.product,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeProductDimensions: (product) => {
      const { widthInInches, heightInInches } = product;
      dispatch({
        type: 'CHANGE_PRODUCT_DIMENSIONS', widthInInches, heightInInches,
      });
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductContainer);

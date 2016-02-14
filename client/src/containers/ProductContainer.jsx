import React, { Component } from 'react';
import { connect } from 'react-redux';
import DraggableStickerContainer from './DraggableStickerContainer';

export class ProductContainer extends Component {

  constructor() {
    super();
    this.handleProductDimensionsChange = this.handleProductDimensionsChange.bind(this);
  }

  componentDidMount() {
    this.props.changeProductDimensions(11.8, 7.56);
  }

  handleProductDimensionsChange(event) {
    const selectedOption = event.target.selectedOptions[0];
    const width = parseFloat(selectedOption.getAttribute('data-width'));
    const height = parseFloat(selectedOption.getAttribute('data-height'));
    this.props.changeProductDimensions(width, height);
  }

  render() {
    return (
      <div className="product-view">
        <div className="product-header">
          <a href="#" className="link-secondary" onClick={this.props.clearCustomization}>
            CLEAR CUSTOMIZATION
          </a>
          <select onChange={this.handleProductDimensionsChange}>
            <option data-width="11.8" data-height="7.56">{`MacBook Air 11"`}</option>
            <option data-width="12.8" data-height="8.94">{`MacBook Air 13"`}</option>
            <option data-width="12.35" data-height="8.62">{`MacBook Pro 13"`}</option>
            <option data-width="14.13" data-height="9.73">{`MacBook Pro 15"`}</option>
          </select>
        </div>
        <div className="product-img dropzone">
          <img id="custom" src="/img/macbook.jpg" />
          <DraggableStickerContainer />
        </div>
      </div>
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
    changeProductDimensions: (widthInInches, heightInInches) => {
      dispatch({
        type: 'CHANGE_PRODUCT_DIMENSIONS', widthInInches, heightInInches,
      });
    },
    clearCustomization: () => {
      dispatch({ type: 'CLEAR_CUSTOMIZATION' });
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductContainer);

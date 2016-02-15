import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import DraggableStickerContainer from './DraggableStickerContainer';

export const IMAGE_WIDTH_IN_PIXELS = 550;
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
        <div className="product-img dropzone" style={{ width: `${IMAGE_WIDTH_IN_PIXELS}px` }}>
          <img id="custom" src="/img/macbook.jpg" />
          <DraggableStickerContainer />
        </div>
        <div className="product-footer">
          <button href="#" onClick={this.props.clearCustomization}>
            CLEAR CUSTOMIZATION
          </button>
          <select onChange={this.handleProductDimensionsChange}>
            <option data-width="11.8" data-height="7.56">{`MacBook Air 11"`}</option>
            <option data-width="12.8" data-height="8.94">{`MacBook Air 13"`}</option>
            <option data-width="12.35" data-height="8.62">{`MacBook Pro 13"`}</option>
            <option data-width="14.13" data-height="9.73">{`MacBook Pro 15"`}</option>
          </select>
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

ProductContainer.propTypes = {
  changeProductDimensions: PropTypes.func,
  clearCustomization: PropTypes.func,
};

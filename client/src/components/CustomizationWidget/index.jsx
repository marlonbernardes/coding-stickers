import React, { Component } from 'react';
import Product from '../Product';
import styles from './CustomizationWidget.scss';

export default class CustomizationWidget extends Component {
  render() {
    return (
      <div className={styles.container}>
        <span>Customization Widget</span>
        <Product image="http://store.storeimages.cdn-apple.com/4659/as-images.apple.com/is/image/AppleInc/aos/published/images/m/ac/macbookpro/select/macbookpro-select-inthebox?wid=561&hei=402&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1433484222004"/>
      </div>
    );
  }
}

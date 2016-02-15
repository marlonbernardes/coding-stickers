import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import CustomizationWidget from '../components/CustomizationWidget';
import StickersApi from '../api/stickers';

export class CustomizationContainer extends Component {

  componentDidMount() {
    this.props.findStickers();
  }

  render() {
    return (
      <CustomizationWidget onChangeFilter={this.props.findStickers} />
    );
  }
}

function mapStateToProps(state) {
  return {
    stickers: state.stickers,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    findStickers: (event) => {
      const query = event ? event.target.value : '';
      StickersApi.findStickers(query).then(response => {
        dispatch({ type: 'CHANGE_PAGE', value: 1 });
        dispatch({ type: 'RECEIVE_STICKERS', stickers: response });
      });
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomizationContainer);

CustomizationContainer.propTypes = {
  findStickers: PropTypes.func,
};

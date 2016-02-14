import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomizationWidget from '../components/CustomizationWidget';
import StickersApi from '../api/stickers';

export class CustomizationContainer extends Component {

  componentDidMount() {
    this.props.findStickers();
  }

  render() {
    return (
      <CustomizationWidget
        onChangeFilter={this.props.findStickers}
        onChangePage={this.props.changePage}
        currentPage={this.props.currentPage}
        totalPages={this.props.totalPages}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    stickers: state.stickers,
    currentPage: state.pagination.get('current'),
    totalPages: Math.floor(state.stickers.size / state.pagination.get('perPage')) + 1,
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
    changePage: (pageNumber) => {
      dispatch({ type: 'CHANGE_PAGE', value: pageNumber });
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomizationContainer);

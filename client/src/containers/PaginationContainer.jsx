import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pagination from '../components/Pagination';

export class PaginationContainer extends Component {

  render() {
    return (
      <Pagination
        totalPages={this.props.totalPages}
        onChangePage={this.props.onChangePage}
        currentPage={this.props.currentPage}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    currentPage: state.pagination.get('current'),
    totalPages: Math.floor(state.stickers.size / state.pagination.get('perPage')) + 1,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChangePage: (pageNumber) => {
      dispatch({ type: 'CHANGE_PAGE', value: pageNumber });
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaginationContainer);

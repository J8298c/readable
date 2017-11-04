import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchingCategories } from '../actions/index';

class Home extends Component {
  state = {}

  componentDidMount() {
    this.props.fetchingCategories();
  }

  render() {
    console.log(this.props.state);
    return (
      <div>
        Home
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    state
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchingCategories}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

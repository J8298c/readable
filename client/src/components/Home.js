import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchingCatTitles } from '../actions/index';
import { Link } from 'react-router-dom'

class Home extends Component {

  componentDidMount() {
    console.log('dispatching something');
    this.props.fetchingCatTitles();
  }

  render() {
    console.log(this.props.state, 'cat')
    const { categories } = this.props.state.categories;
    console.log(categories)
    return (
      <div>
        {
          categories ?
          categories.map(category => (
            <h1 key={category.name}>
              {category.name}
            </h1>
          ))
          :
          '...Loading'
        }
      </div>
    );

  }

}
function mapStateToProps(state) {
  console.log(state);
  return {state}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchingCatTitles}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

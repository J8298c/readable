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
            <Link to={`/posts/${category.name}`} key={category.name}>
              <h1>
                {category.name}
              </h1>
            </Link>
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

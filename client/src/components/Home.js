import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchingTitles} from '../actions/index';
import { Link } from 'react-router-dom';

class Home extends Component {
  componentDidMount() {
    this.props.fetchingTitles();
  }
  render(props) {
    console.log(this.props.title)
    return (
      <div>
       {this.props.title ? this.props.title.categories.map((category) => (
         <div key={category.name}>
          <h1>{category.name}</h1>
         </div>
       )):
       '....Loading'
     }
      </div>
    )
  }
}
function mapStateToProps(state) {
  console.log(state)
  const { title } = state;
  console.log(title);
  return { title }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchingTitles}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

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
    return (
      <div>
       {this.props.title ? this.props.title.categories.map((category) => (
         <div key={category.name}>
            <Link to={`/posts/${category.name}`}><h1>{category.name}</h1></Link>
         </div>
       )):
       '....Loading'
     }
      </div>
    )
  }
}
function mapStateToProps(state) {
  const { title } = state;
  return { title }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchingTitles}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

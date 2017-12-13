import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchAComment } from '../actions/index';

class CommentHome extends Component {
  componentDidMount(props) {
    const { id } = this.props.match.params;
    this.props.fetchAComment(id);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        CommentHome
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
export default connect(mapStateToProps, { fetchAComment })(CommentHome);

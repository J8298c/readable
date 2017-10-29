import React, { Component } from 'react';

class Posts extends Component {
  constructor(props){
    super(props);
    this.upVote = this.upVote.bind(this);
  }
  componentDidMount(props) {
    console.log(this.props, 'props in posts');
    const { name } = this.props.match.params;
    console.log(name);
  }
  upVote() {
    console.log('upvote meth')
  }
  render() {
    return (
      <div>
        Posts Component
      </div>
    )
  }
}
export default Posts;

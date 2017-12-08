import React, { Component } from 'react';
import Comment from './shared/Comment';

class CommentHome extends Component{
  componentDidMount(){
    //do something
  }
  constructor(props){
    super(props);
    this.onVote = this.onVote.bind(this);
  }
  onVote(id, option) {
    //do something great
  }
  render(props) {
    return (
      <Comment />
    )
  }
}
export default CommentHome;

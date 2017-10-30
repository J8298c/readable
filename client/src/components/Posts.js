import React, { Component } from 'react';

class Posts extends Component {
  constructor(props){
    super(props);
    this.state={};
    this.upVote = this.upVote.bind(this);
  }
  componentDidMount(props) {
    const headers =  { headers: { 'Authorization': 'whatever-you-want' }}
    console.log(this.props, 'props in posts');
    const { name } = this.props.match.params;
    fetch(`http://localhost:3001/${name}/posts`, headers)
    .then(response => response.json())
    .then(posts => {
      console.log(posts)
      this.setState({posts});
    })
    .catch(error => { console.log(error)})
  }
  upVote() {
    console.log('upvote meth')
    let score = this.state.posts[0].voteScore;
    score++
    this.state.posts[0].setState({voteScore: score});
  }
  render() {
    console.log(this.state);
    const { posts } = this.state;
    console.log(posts);
    return (
      <div>
        {posts ?
          posts.map(poststuff => (
            <div  key={poststuff.id}>
            <h1>{poststuff.author}</h1>
            <p>{poststuff.voteScore}</p>
            <button onClick={this.upVote}>Like</button>
            </div>
          ))
          : 'loading'
        }
      </div>
    )
  }
}
export default Posts;

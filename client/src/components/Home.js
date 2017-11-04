import React, { Component } from 'react';

class Home extends Component {
  state = {}

  componentDidMount() {
  const header = { headers: { 'Authorization': 'whatever-you-want' }}
    fetch('http://localhost:3001/categories', header)
    .then(response => response.json())
    .then(categories => {
      console.log(categories);
    })
  }

  render() {
    return (
      <div>
        Home
      </div>
    )
  }
}

export default Home;

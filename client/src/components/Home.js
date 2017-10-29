import React, { Component } from 'react';

class Home extends Component {
  state = { categories: [] }
  componentDidMount() {
    const headers =  { headers: { 'Authorization': 'whatever-you-want' }}
    fetch('http://localhost:3001/categories', headers)
    .then(response => response.json())
    .then(names => {
      this.setState({categories: names})
    })
    .catch(error => { throw new Error(error)})
  }
  render(props) {
    console.log(this.state);
    return (
      <div>
      Home
      </div>
    )
  }
}
export default Home;

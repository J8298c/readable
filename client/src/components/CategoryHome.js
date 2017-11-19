import React, { Component } from 'react'

class CategoryHome extends Component {
    componentDidMount() {
       console.log(this.props)
       const { category } = this.props.match.params;
       console.log(category);
    }
    render() {
        return (
            <div>
                Cat Home
            </div>
        )
    }
}
export default CategoryHome;
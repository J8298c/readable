import React, {Component} from 'react';

class CategoryHome extends Component {
    componentDidMount() {
        console.log(this.props.match.params)
    }
    render() {
        return (
            <div>
                CategoryHome 
            </div>
        )
    }
}
export default CategoryHome;
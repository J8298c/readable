import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchingCategories } from '../actions/index';

class HomePage extends Component {
    componentDidMount() {
        //fetch categories
        this.props.fetchingCategories();

    }
    render() {
        return (
          <div>
              hello
          </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    const { categories } = state
    console.log(categories);
    return { categories }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchingCategories}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
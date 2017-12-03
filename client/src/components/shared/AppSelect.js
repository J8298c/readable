import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';
import { fetchingCategories } from '../../actions/index';

class AppSelect extends Component {
  componentDidMount() {
    this.props.fetchingCategories();
  }
  render(props) {
    console.log(this.props)
    let options = [];
    if(this.props.state.categories) {
      console.log('got the change')
      this.props.state.categories.map(category => (
        options.push({key: category.name, text: category.name, value: category.name})
      ))
      console.log(options)
    }
    return (
      <Form.Select
        placeholder='Category'
        options={options}
        onChange={this.props.onCatChange}
      />
    )
  }
}
function mapStateToProps(state) {
  return {
    state
  }
}
export default connect(mapStateToProps, { fetchingCategories })(AppSelect);

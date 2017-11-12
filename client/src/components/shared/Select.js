import React from 'react';
import { Form } from 'semantic-ui-react';

const AppSelect = (props) => (
    <Form.Select 
        placeholder={props.selectPlaceholder} options ={props.options}
        onSelect={props.onOptionSelect}
        />
)
export default AppSelect;
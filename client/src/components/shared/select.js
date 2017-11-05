import React from 'react';
import { Form } from 'semantic-ui-react'

const Select = (props) => (
    <Form.Field label={props.label} control='select' 
    onChange={props.onChange}>
        {
            props.options.map(option => (
                <option key={option.name} value={option.name}>{option.name}</option>
            ))
        }
    </Form.Field>
)
export default Select;


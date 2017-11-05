import React from 'react';
import { Form } from 'semantic-ui-react'

const Input = (props) => (
    <Form.Input 
        placeholder={props.placeholder} onChange={props.onChange} label={props.label}
    />
)
export default Input;
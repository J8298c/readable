import React from 'react';
import { Form } from 'semantic-ui-react';

const TextArea = (props) => (
    <Form.TextArea label={props.label} placeholder={props.placeholder} 
    onChange={props.onChange} />
)

export default TextArea;
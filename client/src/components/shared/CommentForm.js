import React from 'react';
import { Form } from 'semantic-ui-react';
import AppButton from './AppButton';

const CommentForm = (props) => (
  <Form reply>
    <Form.TextArea onChange={props.onCommentChange} placeholder='...Reply'/>
    <Form.Input onChange={props.onAuthorChange} placeholder='Enter Author name'/>
    <AppButton color='blue' content='Reply' onButtonClick={props.onCommentSave} />
  </Form>  
)

export default CommentForm;

import React from 'react';
import { Form } from 'semantic-ui-react';
import AppButton from './AppButton';

const CommentForm = (props) => (
  <Form reply>
    <Form.TextArea />
  <AppButton color='blue' content='Reply' />
  </Form>  
)

export default CommentForm;

import React from 'react';
import { Form } from 'semantic-ui-react';

const CommentForm = (props) => (
  <Form>
    <Form.Group>
      <Form.Input label='Username' placeholder='Username'
        onChange={props.userNameChange}/>
    </Form.Group>
    <Form.TextArea
      label='Comment' placeholder='Enter your comment'
      onChange={props.textAreaChange}
    />
  </Form>
)

export default CommentForm;

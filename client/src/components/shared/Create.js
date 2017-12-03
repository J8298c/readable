import React from 'react';
import { Form } from 'semantic-ui-react';

const Create = (props) => (
  <Form>
    <Form.Field>
      <Form.Input label='Title' placeholder='Title' onChange={props.onTitleChange} />
      <Form.Input label='Author' placeholder='Author' onChange={props.onAuthorChange} />
      <Form.TextArea label='Post/Comment' placeholder='Add your post or comment'
        onChange={props.onTextChange}
      />
    </Form.Field>
  </Form>
);

export default Create;

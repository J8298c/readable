import React from 'react';
import { Form } from 'semantic-ui-react';

const Create = (props) => (
  <Form>
    <Form.Field>
      <Form.Input style={props.style} label='Title' placeholder={props.titleplaceholder ? props.titleplaceholder : 'Title'} onChange={props.onTitleChange} />
      <Form.Input label='Author' placeholder={props.authorplaceholder ? props.authorplaceholder : 'Author'} onChange={props.onAuthorChange}  />
      <Form.TextArea label='Post/Comment' placeholder={props.bodyplaceholder ? props.bodyplaceholder : 'Add your post or comment'}
        onChange={props.onTextChange}
      />
    </Form.Field>
  </Form>
);

export default Create;

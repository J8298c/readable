import React from 'react';
import { Modal, Form } from 'semantic-ui-react';
import AppButton from './AppButton';
import ModifyPost from './ModifyPost';

const EditModal = (props) => (
    <Modal trigger={<AppButton content='Edit'/>}>
        <Modal.Header>{props.modalHeader}</Modal.Header>
        <Modal.Content>
          <Form>
              <Form.Group>
                  <Form.Input label={props.titleLabel} placeholder='Enter a Title' onChange={props.onTitleChange} />
                  <Form.Input label={props.authorLabel} placeholder='Enter a Author' onChange={props.onAuthorChange} />
              </Form.Group>
              <Form.TextArea label='post' placeholder='Enter your post....' onChange={props.onPostChange}/>
          </Form>
        </Modal.Content>
    </Modal>
)

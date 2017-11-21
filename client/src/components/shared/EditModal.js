import React from 'react';
import { Modal } from 'semantic-ui-react';
import AppButton from './AppButton';
import ModifyPost from './ModifyPost';

const EditModal = (props) => (
    <Modal trigger={<AppButton content='Edit'/>}>
        <Modal.Header>{props.modalHeader}</Modal.Header>
        <Modal.Content>
            <ModifyPost 
                titleLabel={props.modalTitleChange}
            />
        </Modal.Content>
    </Modal>
)
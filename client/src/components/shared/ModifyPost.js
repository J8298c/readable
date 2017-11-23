import React from 'react';
import { Form }   from 'semantic-ui-react';
const ModifyPost = (props) => (
    <Form className={props.className}>
        <Form.Group>
            <Form.Input label={props.titleLabel} placeholder='Enter a Title' onChange={props.onTitleChange} />
            <Form.Input label={props.authorLabel} placeholder='Enter a Author' onChange={props.onAuthorChange} />
            <Form.Select label='Category' options={props.options} placeholder='Choose a category' onSelect={props.onCatSelect}/>
        </Form.Group>
        <Form.TextArea label='post' placeholder='Enter your post....' onChange={props.onPostChange}/>
    </Form>
)
export default ModifyPost;
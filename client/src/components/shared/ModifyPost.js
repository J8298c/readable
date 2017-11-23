import React from 'react';
import { Form }   from 'semantic-ui-react';
const ModifyPost = (props) => (
    <Form className={props.className}>
        <Form.Group>
            <Form.Input label={props.titleLabel} placeholder='Enter a Title' onChange={props.onTitleChange} />
            <Form.Input label={props.authorLabel} placeholder='Enter a Author' onChange={props.onAuthorChange} />
            <select onChange={props.onCatSelect} className='app-selector'>
                <option value='react'>React</option>
                <option value='redux'>Redux</option>
                <option value='udacity'>udacity</option>
            </select>
        </Form.Group>
        <Form.TextArea label='post' placeholder='Enter your post....' onChange={props.onPostChange}/>
    </Form>
)
export default ModifyPost;
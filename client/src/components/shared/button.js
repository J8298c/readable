import React from 'react';
import { Button } from 'semantic-ui-react';

const appButton = (props) => (
    <Button 
        color={props.color} className={props.className} 
        content={props.content} onClick={props.onClick} />
)
export default appButton;
import React from 'react';
import { Button } from 'semantic-ui-react';

const AppButton = (props) => (
    <Button 
        color={props.color} className={props.className} 
        content={props.content} onClick={props.onClick} />
)
export default AppButton;
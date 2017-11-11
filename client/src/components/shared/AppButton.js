import React from 'react';
import { Button } from 'semantic-ui-react';

const AppButton = (props) => (
    <Button
        className={props.buttonClassName} onClick={props.buttonOnClick}
        color={props.color} content={props.content} label={props.label}
    />
)
export default AppButton;
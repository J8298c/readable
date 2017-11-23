import React from 'react';
import { Button } from 'semantic-ui-react'

const AppButton = (props) => (
    <Button color={props.color}  content={props.content} onClick={props.onButtonClick} className={props.className}
    />
)
export default AppButton;
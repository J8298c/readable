import React from 'react';
import { Header } from 'semantic-ui-react'

export const Heading = (props) => (
    <Header
        as={props.as} className={props.className} size={props.size} >
        {props.headerContent}
        </Header>
)

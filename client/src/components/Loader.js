import React from 'react';
import { Loader } from 'semantic-ui-react';

const LoadingScreen = (props) => (
    <Loader size={props.size}>Loading</Loader>
)

export default LoadingScreen;
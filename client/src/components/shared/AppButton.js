import React from 'react';
import { Button } from 'semantic-ui-react';

const AppButton = (props) => (
  <Button
      content={props.content} color={props.color} className={props.className}
      floated={props.floated} fluid={props.fluid} onClick={props.onClick}
      size={props.size}
    />
);

export default Button;

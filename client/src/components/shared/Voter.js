import React from 'react';
import { Button } from 'semantic-ui-react';
import AppButton from './AppButton';

const Voter = (props) => (
  <Button.Group>
    <AppButton content={props.positivecontent} color='green'
      onClick={props.onUpVote} />
      <Button.Or />
    <AppButton content={props.negativecontent} color='red'
      onClick={props.onDownVote} />
  </Button.Group>
)

export default Voter;

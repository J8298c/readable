import React from 'react';
import { Card } from 'semantic-ui-react';
import Voter from './Voter';
import AppButton from './AppButton';

const Comment = (props) => (
  <Card>
    <Card.Content extra>
      <AppButton content='Edit'/>
      <AppButton content='Delete' onClick={props.onDeleteClick} />
    </Card.Content>
    <Card.Content>
      <Card.meta>
        <p>Votes: {props.commentVoteScore}</p>
      </Card.meta>
      <Card.Header>
        {props.commentAuthor}
      </Card.Header>
      <Card.Description>
        { props.commentBody }
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Voter positivecontent={props.positivecontent}
        negativecontent={props.negativecontent} onDownVote={props.onDownVote}
        onUpVote={props.onUpVote}
      />
    </Card.Content>
  </Card>
)
export default Comment;

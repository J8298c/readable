import React from 'react';
import { Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Post = (props) => (
    <Card key={props.postId}>
    <Card.Content>
      <Link to={`/posts/${props.postId}`}>
      <Card.Header>{props.postTitle}</Card.Header>
      </Link>
      <Card.Meta>{props.postAuthor}</Card.Meta>
      <Card.Description>
          {props.postBody}
      </Card.Description>
      <Card.Meta>
        <p>Comments: {props.commentCount}</p>
        <p>Post Score: {props.showVote}</p>
        <p>Created on: {props.timestamp}</p>
      </Card.Meta>
    </Card.Content>
    {
        props.showVoter ? 
        <Card.Content>
            <div>
                This safe
            </div>    
        </Card.Content>   
        :
        null
    }
  </Card>
);
export default Post;
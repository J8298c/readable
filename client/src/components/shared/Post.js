import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Comments from '../Comments';
const postStyle = {
    width: '75%',
    color: '#85f589',
    backgroundColor: '#ee82c3',
    margin: '24px auto',
}

const hrStyle = {
    width: '80%',
    marginTop: '10px',
    marginBottom: '10px'
}

const postFont = {
    color: '#85f589'
}

 const Post = (props) => (
  <Card style={postStyle}>
      <Card.Content style={postFont}>
          <Card.Header>{props.posttitle}</Card.Header>
          <Card.Meta>{props.postauthor}</Card.Meta>
          <Card.Description>{props.postbody}</Card.Description>
          <Card.Meta>
             Score: {props.postvoteScore}
          </Card.Meta>
      </Card.Content>
      <Card.Content extra>
          <Button.Group>
              <Button color='green' content='Like'
              onClick={props.upVote} />
              <Button.Or />
              <Button color='red' content='UnLike'
              onClick={props.downVote} />
          </Button.Group>
          <Button.Group floated='right'>
          <Link to={`/edit/${props.postid}`}><Button color='yellow' content='Edit'
               /></Link>
              <Button.Or />
              <Button color='orange' content='Delete'
                  onClick={props.onDelete}
               />
          </Button.Group>
          <p>Replies</p>
          <hr style={hrStyle}/>
          <Card.Content extra>
              <Comments postId={props.postid} />
          </Card.Content>
      </Card.Content>
  </Card>
);
export default Post;

import React from 'react';
import { Card } from 'semantic-ui-react';
const ShortPost = (props) => (
 <Card>
     <Card.Content>
         <Card.Header>{props.postTitle}</Card.Header>
         <Card.Meta>{props.postAuthor}</Card.Meta>
         <Card.Meta>{props.postVoteScore}</Card.Meta>
         <Card.Meta>{props.postTimeStamp}</Card.Meta>
     </Card.Content>
 </Card>
)
export default ShortPost;
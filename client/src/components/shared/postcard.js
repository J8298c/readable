import React from 'react';
import { Card } from 'semantic-ui-react';
import AppButton from './button';

const PostCard = (props) => (
    <Card>
        <Card.Content>
            <Card.Header>{props.postTitle}</Card.Header>
            <Card.Meta>{props.postAuthor}</Card.Meta>
            <Card.Description>{props.postBody}</Card.Description>
        </Card.Content>
        <Card.Content extra>
            <div className={props.extraClassName}>
                <Card.Meta>{props.postScore}</Card.Meta>
                <Card.Meta>{props.postComments}</Card.Meta>
            </div>
        </Card.Content>
        <Card.Content extra>
            <div className={props.extrabuttons}>
                <AppButton color={props.buttonColor} 
                    content={props.buttonContent} onClick={props.buttonClick}
                />
                <AppButton color={props.buttonColorUnLike} 
                    content={props.buttonContentUnLike} onClick={props.buttonClickUnLike}
                />
            </div>
        </Card.Content>
    </Card>
)
export default PostCard;
import React from 'react';


const Comment = (props) => (
    <div>
        <Card>
            <Card.Content>
                <Card.Meta>
                    {props.commentAuthor}
                </Card.Meta>
                <Card.Description>
                    {props.commentBody}
                </Card.Description> 
            </Card.Content>
        </Card>
    </div>
)
export default Commenmt;
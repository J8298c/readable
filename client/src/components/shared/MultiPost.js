import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'semantic-ui-react'
import Post from './Post';

const MultiPost = (props) => {
    console.log(props);
    return(
        <div> 
           {
               props.posts ?
               props.posts.map(post => (
                   <Post postId={post.id} postAuthor={post.author} key={post.id}
                    postBody={post.body} commentCount={post.commentCount} showVote={post.showVote}
                    timestamp={post.timestamp} />
               ))
               : null
           }
        </div>  
    )
}
export default MultiPost;
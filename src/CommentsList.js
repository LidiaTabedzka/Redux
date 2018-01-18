import React from 'react';
import Comment from './CommentContainer';

const CommentsList = ({comments}) => 
    <div>
        <form>
            <input type="text" placeholder="Add new comment"/>
        </form>
        <ul>{comments.map(comment => <Comment key={comment.id} {...comment}/>)}</ul>
    </div>;

export default CommentsList;
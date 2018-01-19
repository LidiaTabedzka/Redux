import React from 'react';
import './Comment.css';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, removeComment}) => 
    <li>
        <div>
            <p>{text}</p>
            <span>votes: {votes}</span>
            <button className="thumb-up-button" onClick={() => thumbUpComment(id)}><i className="fa fa-thumbs-up" aria-hidden="true"></i></button>
            <button className="thumb-down-button" onClick={() => thumbDownComment(id)}><i className="fa fa-thumbs-down" aria-hidden="true"></i></button>
            <button className="delete-button" onClick={() => removeComment(id)}><i className="fa fa-times" aria-hidden="true"></i></button>
            <button className="edit-button"><i className="fa fa-pencil" aria-hidden="true"></i></button>
        </div>
    </li>;

export default Comment;
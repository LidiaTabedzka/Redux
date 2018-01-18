import React from 'react';
import './Comment.css';

const Comment = ({text, votes}) => <li>{text} <span>votes: {votes}</span></li>;

export default Comment;
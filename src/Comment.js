import React, {Component} from 'react';
import './Comment.css';

class Comment extends Component {

    handleChange(e) {
        this.props.commentInputChange(e.target.value, this.props.id);
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.props.inputText !== "") {
            this.props.editComment(this.props.inputText, this.props.id);
        } else {
            this.props.commentInputChange(this.props.text, this.props.id);
        }
        this.props.editButtonClicked(this.props.id, false);        
    }

    render() {
        return (
            <li>
                <div className="comment-div">
                    <p>{this.props.text}</p>
                    {
                        this.props.edit ? 
                            <form onSubmit={e => this.handleSubmit(e)}>
                                <input type="text" value={this.props.inputText} ref={input => input && input.focus()} onChange={(e) => this.handleChange(e)}/>
                            </form> : null
                    }
                    <div>
                        <span>votes: {this.props.votes}</span>
                        <button className="thumb-up-button" onClick={() => this.props.thumbUpComment(this.props.id)}><i className="fa fa-thumbs-up" aria-hidden="true"></i></button>
                        <button className="thumb-down-button" onClick={() => this.props.thumbDownComment(this.props.id)}><i className="fa fa-thumbs-down" aria-hidden="true"></i></button>
                        <button className="delete-button" onClick={() => this.props.removeComment(this.props.id)}><i className="fa fa-times" aria-hidden="true"></i></button>
                        <button className="edit-button" onClick={() => this.props.editButtonClicked(this.props.id, true)}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                    </div>
                </div>
            </li>
        );
    }
}
   

export default Comment;
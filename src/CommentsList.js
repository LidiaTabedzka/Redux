import React, {Component} from 'react';
import Comment from './CommentContainer';
import './CommentsList.css';

class CommentsList extends Component {

    handleChange(e) {
        this.props.change(e.target.value);
    }

    handleClick() {
        if (this.props.inputText !== "") {
            this.props.add(this.props.inputText);
            this.props.change("");
        }
    }

    handleKeyUp(e) {
        if (e.keyCode === 13) {
            this.handleClick();
        }
    }

    render () {
        return (
            <div className="list">
                <h1>Comments App - using Redux and React</h1>
                <div className="add-comment-div">
                    <input type="text" value={this.props.inputText} ref={input => input && input.focus()} placeholder="Add a new comment" onChange={(e) => this.handleChange(e)} onKeyUp={e => this.handleKeyUp(e)}/>
                    <button onClick={() => this.handleClick()}><i className="fa fa-check" aria-hidden="true"></i></button>
                </div>
                <ul>{this.props.comments.map(comment => <Comment key={comment.id} {...comment}/>)}</ul>
            </div>
        )
    }; 
}
    

export default CommentsList;
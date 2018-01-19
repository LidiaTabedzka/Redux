import {ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT, EDIT_BUTTON_CLICKED, COMMENT_INPUT_CHANGE} from './actions.js';

function comments(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return [{
                    id: action.id,
                    text: action.text,
                    votes: 0,
                    edit: false,
                    inputText: action.text
                }
                , ...state];
        case REMOVE_COMMENT:
            return state.filter(comment => comment.id !== action.id);
        case EDIT_COMMENT:
            return state.map(comment => {
                if(comment.id === action.id) {
                return {...comment, text: action.text}
                }
                return comment;
            });
        case EDIT_BUTTON_CLICKED:
            return state.map(comment => {
                if(comment.id === action.id) {
                return {...comment, edit: action.edit}
                }
                return comment;
            });  
        case COMMENT_INPUT_CHANGE:
            return state.map(comment => {
                if(comment.id === action.id) {
                return {...comment, inputText: action.inputText}
                }
                return comment;
            });      
        case THUMB_UP_COMMENT:
            return state.map(comment => {
                if(comment.id === action.id) {
                return {...comment, votes: comment.votes + 1}
                }
                return comment;
            });
        case THUMB_DOWN_COMMENT:
            return state.map(comment => {
                if(comment.id === action.id){
                return {...comment, votes: comment.votes - 1}
                }
                return comment;
            });
        default:
            return state;
    }
}

export default comments;
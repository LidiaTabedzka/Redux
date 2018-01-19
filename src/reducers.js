import {combineReducers} from 'redux';
import comments from './comments.js';
import users from './users.js';
import inputTextChange from './inputTextChange.js';

const reducer = combineReducers({
    comments,
    users,
    inputTextChange
});

export default reducer;
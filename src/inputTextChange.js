import {INPUT_CHANGE} from './actions.js';

function inputTextChange(state = "", action) {
    switch(action.type) {
        case INPUT_CHANGE:
            return action.text;
        default:
            return state;
    }
}

export default inputTextChange;
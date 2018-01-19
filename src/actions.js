import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';
export const INPUT_CHANGE = 'INPUT_CHANGE';
export const EDIT_BUTTON_CLICKED = 'EDIT_BUTTON_CLICKED';
export const COMMENT_INPUT_CHANGE = 'COMMENT_INPUT_CHANGE';

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4(),
        edit: false,
        inputText: text
    }
}

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id
    }
}

function editComment(text, id) {
    return {
        type: EDIT_COMMENT,
        text,
        id
    }
}

function editButtonClicked(id, value) {
    return {
        type: EDIT_BUTTON_CLICKED,
        edit: value,
        id
    }
}

function thumbUpComment(id) {
    return {
        type: THUMB_UP_COMMENT,
        id
    }
}

function thumbDownComment(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id
    }
}

function inputChange(text) {
    return {
        type: INPUT_CHANGE,
        text
    }
}

function commentInputChange(text, id) {
    return {
        type: COMMENT_INPUT_CHANGE,
        inputText: text,
        id
    }
}

export {addComment, removeComment, editComment, thumbUpComment, thumbDownComment, inputChange, editButtonClicked, commentInputChange};
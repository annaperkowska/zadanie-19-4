import uuid from 'uuid';


export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP = 'THUMB_UP';
export const THUMB_DOWN = 'THUMB_DOWN';

{
	type: ADD_COMMENT,
	id: 2,
	text: 'First comment',
	thumbs: -4
}

{
	type: EDIT_COMMENT,
	id: 15,
	text: 'New comment'
}

{
	type: REMOVE_COMMENT,
	id: 24
}

{
	type: THUMB_UP,
	id: 12,
	thumbs: 3
}

{
	type: THUMB_DOWN,
	id: 9,
	thumbs: 43
}

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4(),
        thumbs: 0
    }
}

function editComment(text, id) {
    return {
        type: EDIT_COMMENT,
        text,
        id
    }
}

function removeComment(id) {
    return {
        type: ADD_COMMENT,
        id
    }
}

function thumbUp(thumbs, id) {
	return {
		type: THUMB_UP,
		thumbs: thumbs +1,
		id
	}
}

function thumbDown(thumbs, id) {
	return {
		type: THUMB_DOWN,
		thumbs: thumbs -1,
		id
	}
}

const boundAddComment = text => dispatch(addComment(text));
const boundEditComment = text => dispatch(editComment(text, id));
const boundRemoveComment = id => dispatch(removeComment(id));
const boundThumbUp = id => dispatch(thumbUp(thumbs, id));
const boundThumbDown = id => dispatch(thumbDown(thumbs, id));

addComment('Hello!');
editComment('Hello world', 3);
removeComment(5);
thumbUp(4, 12);
thumbDown(-4, 54);
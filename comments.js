import {ADD_COMMENT} from './action'
import {EDIT_COMMENT} from './action'
import {REMOVE_COMMENT} from './action'
import {THUMB_UP} from './action'
import {THUMB_DOWN} from './action'

const initialState = {
    comments: [],
    users: []
};


function comments(state = [], action) {
    switch(action.type) {
    	case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votes: 0
            },
            ...state.comments];
    	case REMOVE_COMMENT:
    		return comments: state.comments.filter(comment => comment.id !== action.id)
    	case EDIT_COMMENT:
    		return comments: state.comments.map(comment => (comment.id === action.id ? {...comment, text: action.text} : comment))
    	case THUMB_UP:
    		return comments: state.comments.map(comment => (comment.id === action.id ? {...comment, votes: comment.votes +1} : comment))
		case THUMB_DOWN:
			return comments: state.comments.map(comment => (comment.id === action.id ? {...comment, votes: comment.votes -1} : comment))
    	default: 
    		return state;

    }
}


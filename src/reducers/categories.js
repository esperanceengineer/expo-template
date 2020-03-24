import {ADD_CATEGORY,CATEGORIES} from '../actions';

const categories = (state = [],action) => {
    switch (action.type) {
        case ADD_CATEGORY:
            return [...state,action.category]
            break;
        case CATEGORIES:
            return action.categories
            break;
        default:
            return state
            break;
    }
}

export default categories;
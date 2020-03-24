import {ADD_USER} from '../actions';

const user  = (state = {},action) => {
    switch (action.type) {
        case ADD_USER:
            return action.user
            break;
    
        default:
            return state
            break;
    }
}

export default user;
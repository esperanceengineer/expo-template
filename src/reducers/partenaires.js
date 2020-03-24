import {ADD_PARTENAIRE,PARTENAIRES} from '../actions';

const partenaires = (state = [],action) => {
    switch (action.type) {
        case ADD_PARTENAIRE:
            return [...state,action.partenaire]
            break;
        case PARTENAIRES:
            return action.partenaires
            break;
        default:
            return state
            break;
    }
}

export default partenaires;
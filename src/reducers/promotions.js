import {ADD_PROMOTION,SHARE_PROMOTION,VIEW_PROMOTION,TOGGLE_PROMOTION,PROMOTIONS} from '../actions';

const promotions = (state = [],action) => {
    switch (action.type) {
        case ADD_PROMOTION:
            return [...state,action.promotion]
            break;
        case PROMOTIONS:
            return action.promotions
            break;
        case TOGGLE_PROMOTION:
            return state.map((promotion ,index) => {
                if (promotion.title === action.promotion.title) {
                    return {...promotion,like:!promotion.like}
                }
                return promotion
            })
            break;
        case VIEW_PROMOTION:
            return state.map((promotion ,index) => {
                if (promotion.title === action.promotion.title) {
                    return {...promotion,view:1}
                }
                return promotion
            })
            break;
        case SHARE_PROMOTION:
            return state.map((promotion ,index) => {
                if (promotion.title === action.promotion.title) {
                    return {...promotion,share:'canal'}
                }
                return promotion
            })
            break;
        default:
            return state
            break;
    }
}

export default promotions;
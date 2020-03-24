import {ADD_COUPON,COUPONS} from '../actions';

const coupons = (state = [],action) => {
    switch (action.type) {
        case ADD_COUPON:
            return [...state,action.coupon]
            break;
        case COUPONS:
            return action.coupons
            break;
        default:
            return state
            break;
    }
}
export default coupons;
import {combineReducers} from 'redux';
import user from './user';
import promotions from './promotions';
import categories from './categories';
import coupons from './coupons';
import partenaires from './partenaires';


export default combineReducers({
    user,
    promotions,
    categories,
    coupons,
    partenaires
})
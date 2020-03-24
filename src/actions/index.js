//actions type
const ADD_PROMOTION = "ADD_PROMOTION";
const TOGGLE_PROMOTION = "TOGGLE_PROMOTION";
const SHARE_PROMOTION = "SHARE_PROMOTION";
const VIEW_PROMOTION = "VIEW_PROMOTION";
const PROMOTIONS = "PROMOTIONS";

const ADD_CATEGORY = "ADD_CATEGORY";
const CATEGORIES = "CATEGORIES";

const ADD_COUPON = "ADD_COUPON";
const COUPONS = "COUPONS";

const ADD_USER = "ADD_USER";
const USER = "USER";
const CREATE_USER = "CREATE_USER";

const ADD_PARTENAIRE = "ADD_PARTENAIRE";
const PARTENAIRES = "PARTENAIRES";


//ACTIONS CREATORS
//actions of promotions
const addPromotion = (promotion) => ({
    type:ADD_PROMOTION,
    promotion
})
const togglePromotion =(promotion) => ({
    type:TOGGLE_PROMOTION,
    promotion
})
const sharePromotion =(promotion) => ({
    type:SHARE_PROMOTION,
    promotion
})
const viewPromotion = (promotion) => ({
    type:VIEW_PROMOTION,
    promotion
})
const promotions = (promotions) => ({
    type:PROMOTIONS,
    promotions
})

//actions category
const addCategory = (category) => ({
    type:ADD_CATEGORY,
    category
})
const categories = (categories) => ({
    type:CATEGORIES,
    categories
})

//actions coupons
const addCoupon = (coupon) => ({
    type:ADD_COUPON,
    coupon
})
const coupons = (coupons) => ({
    type:COUPONS,
    coupons
})

//actions user
const addUser = (user) => ({
    type:ADD_USER,
    user
})
const createUser = (user) => ({
    type:CREATE_USER,
    user
})

//actions partenaire
const addPartenaire = (partenaire) => ({
    type:ADD_PARTENAIRE,
    partenaire
})
const partenaires = (partenaires) => ({
    type:PARTENAIRES,
    partenaires
})

export {
    ADD_PROMOTION,SHARE_PROMOTION,TOGGLE_PROMOTION,VIEW_PROMOTION,PROMOTIONS,
    addPromotion,sharePromotion,togglePromotion,viewPromotion,promotions,
    ADD_CATEGORY,CATEGORIES,addCategory,categories,
    ADD_COUPON,COUPONS,addCoupon,coupons,
    ADD_USER,addUser,CREATE_USER,createUser,
    ADD_PARTENAIRE,PARTENAIRES,addPartenaire,partenaires
}
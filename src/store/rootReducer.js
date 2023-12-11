import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";

//Where I hold all the states
const rootReducer = combineReducers({
    cart : cartReducer
    //user : userReducer,

})

export default rootReducer;
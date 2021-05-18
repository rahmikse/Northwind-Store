import {combineReducers} from "redux";
import changeCategoryReducer from './changeCategoryReducer'
import CategoryListReducer from './CategoryListReducer'
import productListReducer from "./productListReducer";
import cartReducer from "./cartReducer";
import SaveProductReducer from "./SaveProductReducer";
const rootReducer = combineReducers({
    changeCategoryReducer,
    CategoryListReducer,
    productListReducer,
    cartReducer,
    SaveProductReducer
})

export default rootReducer;
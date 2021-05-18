import *as actionTypes from '../actions/actionsTypes'
import initialState from './initialState'

export default function SaveProductReducer(state = initialState.saveProduct, action) {
    switch (action.type) {
        case actionTypes.UPDATE_PRODUCT_SUCCESS:
            return action.payload
        case actionTypes.CREATE_PRODUCT_SUCCESS:
            return action.payload
        default:
            return state;
    }
}
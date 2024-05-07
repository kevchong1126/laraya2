import { combineReducers } from "redux"

import cartItems from './reducers/cartItems'
import filterSelect from "./reducers/filterSelect"

const reducers = combineReducers({
    cartItems,
    filterSelect
})

export default reducers
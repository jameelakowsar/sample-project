import { combineReducers } from 'redux'
import { itemsState, chartItemsState } from './MainReducer'

export default combineReducers({
    itemsState,
    chartItemsState
})
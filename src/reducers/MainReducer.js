import * as actionTypes from '../actions'

export const initialState = {
    items: [],
    chartItems: []
}

export const itemsState = (state={}, action) => {
    const data = action.payload
    switch(action.type) {
        case actionTypes.STORE_API_DATA:
            return Object.assign({}, state, {
                items: data
            })
        case actionTypes.DELETE_CARD_ACTION:
            const remainItems = state.items.filter((country) => country.alpha2Code !== data)  
            return Object.assign({}, state, {
                items: remainItems
            })
        // To search, Here Data is not available that's why it's returnig 0.    
        case actionTypes.GET_SEARCH_DATA:
            const searchedThings = state.items.filter((country) => (country.name).toLocaleLowerCase() === data.toLocaleLowerCase())    
            return Object.assign({}, state, {
                items: searchedThings
            })
        case actionTypes.CLAER_SEACH:
            return Object.assign({}, state)    
        default:
            return state;    
    }
}

export const chartItemsState = (state={}, action) => {
    const data = action.payload
    switch(action.type) {
        case actionTypes.GET_CHART_DATA:            
            const chartData = data && data.map((country) => {
                return {
                    x: country.alpha2Code,
                    y: country.population
                }
            })
            return Object.assign({}, state, {
                chartItems: chartData
            })
        case actionTypes.DELETE_CARD_ACTION:
            const remainItems = state.chartItems.filter((country) => country.alpha2Code !== data)  
            return Object.assign({}, state, {
                items: remainItems
            })     
        default:
            return state;
    }
}

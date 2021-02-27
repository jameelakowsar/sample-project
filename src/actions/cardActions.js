export const STORE_API_DATA = 'STORE_API_DATA';
export const SELECTED_PAGE ='SELECTED_PAGE';
export const GET_CHART_DATA = 'GET_CHART_DATA';
export const DELETE_CARD_ACTION = 'DELETE_CARD_ACTION';
export const GET_SEARCH_DATA = 'GET_SEARCH_DATA';
export const CLAER_SEACH = 'CLAER_SEACH';

export const storeAPIData = (data) => {
    return {
        type: STORE_API_DATA,
        payload: data
    }
}

export const selectedPage = (pageName) => {
    return {
        type: SELECTED_PAGE,
        payload: pageName
    }
}

export const setChartData = (data) => {
    return {
        type: GET_CHART_DATA,
        payload: data
    }
}

export const deleteCardAction = (deletedAlphaCode) => {
    return {
        type: DELETE_CARD_ACTION,
        payload: deletedAlphaCode
    }
}

export const getSearchDataAction = (searchString) => {
    return {
        type: GET_SEARCH_DATA,
        payload: searchString,
    }
}

export const clearSearchAction = () => {
    return {
        type: CLAER_SEACH
    }
}
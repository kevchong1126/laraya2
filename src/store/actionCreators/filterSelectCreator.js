import { SELECT_CAR, SELECT_MODE, SELECT_CATEGORY, SORT_BY } from "../actionTypes/filterSelectTypes";

export const CAR_SELECT = car => {
    return {
        type: SELECT_CAR,
        payload: {
            car
        }
    }
}

export const MODE_SELECT = mode => {
    return {
        type: SELECT_MODE,
        payload: {
            mode
        }
    }
}

export const CATEGORY_SELECT = category => {
    return {
        type: SELECT_CATEGORY,
        payload: {
            category
        }
    }
} 

export const SORT = sort => {
    return {
        type: SORT_BY,
        payload: {
            sort
        }
    }
}
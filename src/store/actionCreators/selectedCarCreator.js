import { SELECT_CAR, DELETE_CAR } from "../actionTypes/selectedCarTypes";

export const setCar = (make) => {
    
    return {
        type: SELECT_CAR,
        payload: `${make}`
    }
}

export const deleteCar = () => {
    
    return {
        type: DELETE_CAR
    }
}
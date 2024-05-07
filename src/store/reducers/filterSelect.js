import { SELECT_CAR, SELECT_MODE, SELECT_CATEGORY, SORT_BY } from "../actionTypes/filterSelectTypes"

const initialState = {
    car: 'Carro',
    mode: 'Nombre',
    category: 'Todos',
    sort: 'Alfabetico (A-Z)'
}

const filterSelectReducer = (state = initialState, action) => {
    switch (action.type){
        case SELECT_CAR: {
            const { car } = action.payload;

            return {
                ...state,
                car
            }
        }
        case SELECT_MODE: {
            const { mode } = action.payload;

            return {
                ...state,
                mode
            }
        }
        case SELECT_CATEGORY: {
            const { category } = action.payload;
            return {
                ...state,
                category
            }
        }
        case SORT_BY: {
            const { sort } = action.payload;

            return {
                ...state,
                sort
            }
        }

        default: return state
    }
}

export default filterSelectReducer;
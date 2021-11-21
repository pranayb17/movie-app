import { ADD_MOVIES } from '../actions'

const initialMoviesState = {
    list: [] ,
    favorites: []
}

export default function movies (state = initialMoviesState, action) {
    if (action.type === ADD_MOVIES) {
        return {
            ...state , //spread the state
            list: action.movies
        }
    }
    return state;
}



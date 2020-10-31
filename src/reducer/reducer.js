export default function reducer(state = {pictures: [], requesting: false}, action) {
    switch (action.type) {
        case 'START_ADDING_HUBBLE_PICTURES_REQUEST':
            return {...state,
                pictures: [...state.pictures],
                requesting: true
            }
        case 'ADD_PICTURES':
            return {...state,
                pictures: action.pictures,
                requesting: false
            }
        default:
            return state
    }
}
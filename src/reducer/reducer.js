export default function reducer(state = {pictures: [], requesting: false, activePicture: {}}, action) {
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
        case 'ADD_ACTIVE_PICTURE':
            return {...state,
                pictures: [...state.pictures],
                activePicture: action.picture
            }
        default:
            return state
    }
}
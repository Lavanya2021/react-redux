import { USER_DATA } from '../actions/types';

const initialState = {
    user: ''
}

export default function User(state = initialState, action) {

    switch (action.type) {

        case USER_DATA:
            const post = action.payload;
            console.log("reducer", post)
            return {
                ...state,
                user: post
            }

        default:
            return state;
    }
} 
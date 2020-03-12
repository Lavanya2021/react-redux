import { USER_DATA } from "./types"

export function userData(data) {
    console.log("action", data)
    return {
        type: USER_DATA,
        payload: data
    }
}

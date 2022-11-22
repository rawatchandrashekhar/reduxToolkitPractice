// export default (status) => {
//     return {
//         type: 'UPDATE_STATUS',
//         payload: status
//     }
// }

import { createAction } from "@reduxjs/toolkit";

export const updateStatus = createAction("UPDATE_STATUS")

export const fetchName = () => {
    return async (dispatch) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const result = await response.json()
        dispatch({ type: 'UPDATE_NAME', payload: result[0].name })
    }
}
import { createSlice, createReducer, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
    name: "Chandra Shekhar",
    age: 20,
    status: "Unmarried",
    addUser: []
}

export const fetchUserName = createAsyncThunk(
    'fetchusers',
    async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const result = await response.json()
        return result[Math.floor(Math.random() * 10)].name
    }
)

const userReducer = createSlice({
    name: 'person',
    initialState,
    reducers: {
        updateAge(state, action) {
            state.age = action.payload
        },
        updateName(state, action) {
            state.name = action.payload
        },
        updateStatus(state, action) {
            state.status = action.payload
        },
        addNewUserData(state, action) {
            state.addUser.push(action.payload)
        },
        deleteUserData(state, action) {
            state.addUser = state.addUser.filter((todo, i) => todo.userId !== action.payload)
        },
        editUserData(state, action) {
            state.addUser = state.addUser.map((el) =>
                el.userId == action.payload.userId ? action.payload : el
            );
        }
    },
    extraReducers: {
        [fetchUserName.fulfilled]: (state, action) => {
            state.name = action.payload
        },
        [fetchUserName.pending]: (state, action) => {
            state.name = "Loading..."
        },
        [fetchUserName.rejected]: (state, action) => {
            state.name = "Try again"
        }
    }
})

export const { updateAge, updateName, updateStatus, addNewUserData, deleteUserData, editUserData } = userReducer.actions

export default userReducer.reducer

// export default (state = initialState, action) => {
//     if (action.type === "UPDATE_AGE") {
//         return {
//             ...state,
//             age: action.payload
//         }
//     }
//     return state
// }

// export default createReducer(initialState, (builder) => {
//     builder.addCase('UPDATE_AGE', (state, action) => {
//         state.age = action.payload
//     })
//     builder.addCase('UPDATE_NAME', (state, action) => {
//         state.name = action.payload
//     })
//     builder.addCase('UPDATE_STATUS', (state, action) => {
//         state.status = action.payload
//     })
// })
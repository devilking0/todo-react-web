import { createSlice } from "@reduxjs/toolkit";


export const Slice = createSlice({
    name: 'slice',
    initialState: [],
    reducers: {
        add: (state, action) =>
            {
                state.push(action.payload);
            },
        remove: (state, action) => {
            return state.filter((item, index) => index !== action.payload);
        },
        update :(state, action) =>
        {
           let obj=action.payload
           state[obj.index]=obj.task
           return state
        }
        
    }
})

export const {add, remove, update}  = Slice.actions
export default Slice.reducer
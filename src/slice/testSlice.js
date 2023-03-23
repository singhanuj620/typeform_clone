import { createSlice } from '@reduxjs/toolkit';

export const testSlice = createSlice({
    name: 'test',
    initialState: { name: "test" },
    reducers: {
        setTest: (state, action) => {
            state.name = action.payload
        }
    }
});

// this is for dispatch
export const { setTest } = testSlice.actions;

// this is for configureStore
export default testSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
    name: 'modal',
    initialState: {},
    reducers: {
        setModal: (state, action) => {
            const todo = {
                id: '1234',
                text: action.payload,
            };

            state.push(todo);
        },
        resetModal: (state, action) => {
            const todo = {
                id: '1234',
                text: action.payload,
            };

            state.push(todo);
        }
    }
});

// this is for dispatch
export const { setModal, resetModal } = modalSlice.actions;

// this is for configureStore
export default modalSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

export const answerSlice = createSlice({
    name: 'answer',
    initialState: [],
    reducers: {
        setAnswer: (state, action) => {
            const { questionId, answer } = action.payload;
            state.push({
                id: questionId,
                answer: answer
            })
        },
    }
});

// this is for dispatch
export const { setAnswer } = answerSlice.actions;

// this is for configureStore
export default answerSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

export const answerSlice = createSlice({
    name: 'answer',
    initialState: [],
    reducers: {
        setAnswer: (state, action) => {
            const { questionId, answer } = action.payload;
            const ifAnswerAlreadyExist = state.filter(ans => ans.id === questionId)
            console.log(ifAnswerAlreadyExist)
            if (ifAnswerAlreadyExist && ifAnswerAlreadyExist.length === 1) {
                ifAnswerAlreadyExist.answer = answer;
            }
            else {
                state.push({
                    id: questionId,
                    answer: answer
                })
            }

        },
    }
});

// this is for dispatch
export const { setAnswer } = answerSlice.actions;

// this is for configureStore
export default answerSlice.reducer;
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ServiceFormState {
  answers: Record<number, { questionString: string; answer: string }>;
}

const initialState: ServiceFormState = {
  answers: {},
};

const serviceFormSlice = createSlice({
  name: 'serviceForm',
  initialState,
  reducers: {
    setAnswer: (state, action: PayloadAction<{ questionId: number; questionString: string; answer: string }>) => {
      const { questionId, questionString, answer } = action.payload;
      state.answers[questionId] = { questionString, answer };
    },
    clearAnswers: (state) => {
      state.answers = {};
    },
  },
});

export const { setAnswer, clearAnswers } = serviceFormSlice.actions;
export default serviceFormSlice.reducer;

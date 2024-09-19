import { configureStore } from '@reduxjs/toolkit';
import customerFormReducer from './slices/customerFormSlice';
import equipamentFormSlice from './slices/equipamentFormSlice';
import serviceFormSlice from './slices/serviceFormSlice';

export const store = configureStore({
  reducer: {
    customerForm: customerFormReducer,
    equipamentForm: equipamentFormSlice,
    serviceForm : serviceFormSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

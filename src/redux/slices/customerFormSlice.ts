import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CustomerFormState {
  id: number;
  name: string;
  attentionTo: string;
  email: string;
  address: string;
  date: string;
  phone: string;
  nit: string;
}

const initialState: CustomerFormState = {
  id: 0,
  name: '',
  attentionTo: '',
  email: '',
  address: '',
  date: '',
  phone: '',
  nit: '',
};

const customerFormSlice = createSlice({
  name: 'customerForm',
  initialState,
  reducers: {
    setId: (state, action: PayloadAction<number>) => {
      state.id = action.payload
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setAttentionTo: (state, action: PayloadAction<string>) => {
      state.attentionTo = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    setDate: (state, action: PayloadAction<string>) => {
      state.date = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setNit: (state, action: PayloadAction<string>) => {
      state.nit = action.payload;
    },
    setUpdate: (state, action: PayloadAction<CustomerFormState>) => {
      state = action.payload
    }
  },
});

export const { setName, setAttentionTo, setEmail, setAddress, setDate, setPhone, setNit, setUpdate, setId } = customerFormSlice.actions;
export default customerFormSlice.reducer;

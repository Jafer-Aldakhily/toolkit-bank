import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accounts: [
    {
      id: 1,
      customerName: "Israa Othman",
      accountNumber: "123456",
      accountType: "Savings",
    },
    {
      id: 2,
      customerName: "Ahmad Zahran",
      accountNumber: "987654",
      accountType: "Student accounts",
    },
    {
      id: 3,
      customerName: "Jafer Al-dakhily",
      accountNumber: "976854",
      accountType: "Student accounts",
    },
    {
      id: 4,
      customerName: "Moahammed Al-dakhily",
      accountNumber: "547698",
      accountType: "Student accounts",
    },
  ],
  numberOfAccounts: 4,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.accounts.push(action.payload);
      state.numberOfAccounts += 1;
    },
    removeUser: (state, action) => {
      state.accounts = state.accounts.filter(
        (account) => account.id != action.payload
      );
      state.numberOfAccounts -= 1;
    },
  },
});

export const { addUser, removeUser } = usersSlice.actions;

export default usersSlice.reducer;

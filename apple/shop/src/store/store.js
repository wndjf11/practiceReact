import { configureStore, createSlice } from "@reduxjs/toolkit";

const stock = createSlice({
  name: "stock",
  initialState: [10, 11, 12],
});
let cart = createSlice({
  name: "cart ",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    increaseCount(state, action) {
      const select = state.findIndex((num) => {
        return num.id === action.payload;
      });
      state[select].count++;
    },
    addItem(state, action) {
      console.log(state.length);
      state.push(action.payload);
    },
  },
});

const user = createSlice({
  name: "user",
  initialState: { name: "kim chan hee", age: 20 },
  reducers: {
    changeName(state) {
      state.name = "lee chan hee";
    },
    increaseAge(state) {
      state.age = state.age + 1;
    },
    increaseAge2(state, action) {
      state.age += action.payload;
    },
  },
});
export const { changeName, increaseAge, increaseAge2 } = user.actions;

export const { increaseCount, addItem } = cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    cart: cart.reducer,
  },
});

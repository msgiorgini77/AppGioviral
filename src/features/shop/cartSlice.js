import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: {
      user: "userLogged",
      updatedAt: new Date().toLocaleString(),
      total: null,
      items: [],
    },
  },
  reducers: {
    addItem: (state, action) => {
      const productRepeated = state.value.items.find(
        (item) => item.id === action.payload.id
      );
      if (productRepeated) {
        const itemsUpdated = state.value.items.map((item) => {
          if (item.id === action.payload.id) {
            item.quantity += action.payload.quantity;
            return item;
          }
          return item;
        });
        const total = itemsUpdated.reduce(
          (acc, currentItem) => (acc += currentItem.price * currentItem.quantity),
          0
        );
        state.value = {
          ...state.value,
          items: itemsUpdated,
          total,
          updatedAt: new Date().toLocaleString(),
        };
      } else {
        state.value.items.push(action.payload);
        const total = state.value.items.reduce(
          (acc, currentItem) => (acc += currentItem.price * currentItem.quantity),
          0
        );
        state.value = {
          ...state.value,
          total,
          updatedAt: new Date().toLocaleString(),
        };
      }
    },
    removeItem: (state, action) => {
      // Encuentra el índice del producto que deseas eliminar
      const index = state.value.items.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        state.value.items.splice(index, 1);
      }
      // Actualiza el total del carrito
      state.value.total = state.value.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
    clearCart:(state)=>{
      state.value.items = [];
      state.value.total = 0;
    }
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
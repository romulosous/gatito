import { configureStore } from "@reduxjs/toolkit";
import contador from "./Contador";
import carrinho from "./Carrinho";

export const store = configureStore({
  reducer: {
    contador,
    carrinho
  }
});
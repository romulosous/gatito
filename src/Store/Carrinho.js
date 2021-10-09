import { createSlice } from "@reduxjs/toolkit"

export const carrinho = createSlice({
  name: "carrinho",
  initialState: {
    itens: []
  },
  reducers: {
    adicionar(state, action) {
      state.itens.push(action.payload)
    },
    remover(state, action) {
      state.itens.splice(action.payload, 1)
    },
    resetar(state, action) {
      state.itens = []
    }
  }
})

export const actions = carrinho.actions;
export default carrinho.reducer
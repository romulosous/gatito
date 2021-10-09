import { createSlice } from "@reduxjs/toolkit"

export const contador = createSlice({
  name: "contador",
  initialState: {
    value: 0
  },
  reducers: {
    aumentar(state, action) {
      state.value++
    },
  }
})

export const actions = contador.actions;
export default contador.reducer
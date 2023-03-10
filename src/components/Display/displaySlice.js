import { createSlice } from '@reduxjs/toolkit'

const displaySlice = createSlice({
  name: 'displayText',
  initialState: 'Hit it!',
  reducers: {
    mostrarTextoNoDisplay: (state, action) => {
      console.log(action)
      return action.payload
    },
  },
})

export const { mostrarTextoNoDisplay } = displaySlice.actions;

export default displaySlice.reducer;
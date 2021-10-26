import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

//initial state in the store
const initialState = {
  count: 0,
}

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase(state, action) {
      state.count += 1
    },
    decrease(state, action) {
      state.count -= 1
    },
    reset(state, action) {
      state.count = 0
    },
    increaseOddValue(state, action) {
      if (state.count % 2 === 1) {
        state.count += 1
      }
    },
    increaseSpecificValue(state, action) {
      state.count += action.payload
    },
  },
})

export const {
  increase,
  decrease,
  reset,
  increaseOddValue,
  increaseSpecificValue,
} = counterSlice.actions
export default counterSlice.reducer

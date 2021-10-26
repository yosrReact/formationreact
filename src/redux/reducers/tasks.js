import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import * as api from "../../services/tasks.service"

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const tasks = await api.fetchTasks()
  return tasks
})

const initialState = {
  selectedTask: {},
  loading: false,
  errors: false,
  list: [],
}

const tasksSlice = createSlice({
  name:'tasks',
  initialState,
  reducers:{
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTasks.pending, (state, action) => {
        state.loading= true
        state.error= false 
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        console.log('action: ', action);
       state.list= [...action.payload]
       state.loading= false 
     
      })
  }
})


export default tasksSlice.reducer

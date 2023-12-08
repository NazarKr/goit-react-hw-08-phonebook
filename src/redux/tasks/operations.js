import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import * as tasksApi from '../../shared/services/tasksAPI';


axios.defaults.baseURL = 'https://62584f320c918296a49543e7.mockapi.io';

//localhost:3001
//62584f320c918296a49543e7.mockapi.io

// export const fetchTasks = createAsyncThunk(
//   "tasks/fetchAll",
//   async (_, thunkAPI) => {
//     try {
//       const tasks = await axios.get("/tasks");
//       return tasks.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
// console.log(fetchTasks);
      


export const fetchTasks = createAsyncThunk(
  'tasks/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const tasks = await tasksApi.getAllTasks();
      return tasks;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (data, { rejectWithValue }) => {
    try {
      const result = await tasksApi.addTask(data);
      return result;
    } catch ({ response }) {
      return { rejectWithValue }.rejectWithValue(response.data.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`/tasks/${taskId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const toggleCompleted = createAsyncThunk(
  "tasks/toggleCompleted",
  async (task, thunkAPI) => {
    try {
      const response = await axios.put(`/tasks/${task.id}`, {
        completed: !task.completed,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

import { createAsyncThunk } from "@reduxjs/toolkit";
import * as tasksApi from '../../shared/services/tasksAPI';

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
  'tasks/deleteTask',
  async (id, { rejectWithValue }) => {
    try {
      await tasksApi.deleteTask(id);
      return id;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

export const toggleCompleted = createAsyncThunk(
  "tasks/toggleCompleted",
  async (task, thunkAPI) => {
    try {
      await tasksApi.toggleCompleted(task);
      return task;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
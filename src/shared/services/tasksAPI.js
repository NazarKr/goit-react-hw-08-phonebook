import instance from './authAPI';

export const getAllTasks = async () => {
  const { data } = await instance.get('/tasks');
  return data;
};

export const addTask = async id => {
  const { data } = await instance.post('/tasks/', id);
  return data;
};

export const deleteTask = async id => {
  const { data } = await instance.delete(`/tasks/${id}`);
  return data;
};

export const toggleCompleted = async task => {
  const { data } = await instance.patch(`/tasks/${task._id}/status`, {
    done: !task.done,
  });
  return data;
};

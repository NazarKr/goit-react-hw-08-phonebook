import instance from './authAPI';

export const getAllTasks = async () => {
  const { data } = await instance.get('/tasks');
  return data;
};

export const addTask = async id => {
  const { data } = await instance.post('/tasks/', id);
  return data;
};

// export const deleteContact = async id => {
//   const { data } = await instance.delete(`/contacts/${id}`);
//   return data;
// };

// export const editContact = async id => {
//   const { data } = await instance.put(`/contacts/${id}`);
//   return data;
// };

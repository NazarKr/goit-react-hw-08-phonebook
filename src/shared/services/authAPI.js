import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://nodejs-phonebook.onrender.com/api',
});


// const instance = axios.create({
//   baseURL: 'https://connections-api.herokuapp.com/',
// });

// const instance = axios.create({
//   baseURL: 'https://auth-backend-lesson.herokuapp.com/api',
// });

const setToken = token => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = '';
};

export const register = async data => {
  const { data: result } = await instance.post('/auth/register', data);
  setToken(result.token);
  return result;
};

export const login = async data => {
  const { data: result } = await instance.post('/auth/login', data);
  setToken(result.token);
  return result;
};

export const getCurrent = async token => {
  try {
    setToken(token);
    const { data } = await instance.get('/auth/current');
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export const logout = async () => {
  const { data } = await instance.post('/auth/logout');
  setToken();
  return data;
};

export default instance;

import  instance  from './authAPI';

export const getAllContacts = async () => {
  const { data } = await instance.get('/contacts/');
  return data;
};

export const addContact = async id => {
  const { data } = await instance.post('/contacts/', id);
  return data;
};

export const deleteContact = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};

export const editContact = async id => {
  const { data } = await instance.put(`/contacts/${id}`);
  return data;
};

export const statusContact = async contact => {
  const { data } = await instance.patch(`/contacts/${contact._id}/favorite`, {
    favorite: !contact.favorite,
  });
  return data;
};

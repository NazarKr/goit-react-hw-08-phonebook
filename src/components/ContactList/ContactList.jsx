
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/contactsSelectors';
import { AiOutlineDelete } from 'react-icons/ai';
import ButtonIcon from 'shared/Buttons/ButtonIcon';
import { toast } from 'react-toastify';
import {
  ContactItemLi,
  ContactListUl,
  ContactListWraper,
  ContactName,
  ContactNumber,
} from './ContactList.styled';

import {
  fetchAllContacts,
  fetchDeleteContact,
} from 'redux/contacts/contactsOperations';
import { CounterContacts } from 'components/CounterContacts/CounterContacts';

const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const list = useSelector(selectFilteredContacts);

  const handleContactDelete = id => {
      console.log('Deleting contact with id:', id);
    dispatch(fetchDeleteContact(id));
    toast.info('Contact was deleted');
  };

  return (
    <>
      <ContactListUl>
        <CounterContacts />

        {list.map(({ id, name, phone, email }) => {
          return (
            <ContactItemLi key={id}>
              <ContactListWraper>
                <ContactName>{name}</ContactName>
                <ContactNumber>{phone}</ContactNumber>
                <ContactNumber>{email}</ContactNumber>
              </ContactListWraper>
              <ButtonIcon
                icon={AiOutlineDelete}
                iconSize={20}
                onClick={() => handleContactDelete(id)}
                id={id} // передаємо id до ButtonIcon
              ></ButtonIcon>
            </ContactItemLi>
          );
        })}
      </ContactListUl>
    </>
  );
};

export default ContactList;

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/contactsSelectors';
import { AiOutlineDelete } from 'react-icons/ai';
import ButtonIcon from 'shared/Buttons/ButtonIcon';
import { toast } from 'react-toastify';
import {
  ContactItemLi,
  ContactListUl,
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
    dispatch(fetchDeleteContact(id));
    toast.info('Contact was deleted');
  };

  return (
    <>
      <ContactListUl>
        <CounterContacts />
        
      {list.map(({ id, name, number }) => { 

        return (
          <ContactItemLi key={id}>
            <ContactName>{name}</ContactName>
            <ContactNumber>{number}</ContactNumber> 
            <ButtonIcon
              icon={AiOutlineDelete}
              iconSize={20}
              onClick={() => handleContactDelete(id)}
            >
            </ButtonIcon>
          </ContactItemLi>
        );
      })}
      </ContactListUl>
    </>

  );
};

export default ContactList;
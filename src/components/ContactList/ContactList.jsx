import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/contactsSelectors';
import { AiOutlineDelete } from 'react-icons/ai';
import ButtonIcon from 'shared/Buttons/ButtonIcon';
import { toast } from 'react-toastify';
import {
  ContactButtonWraper,
  ContactItemLi,
  ContactListUl,
  ContactListWraper,
  ContactName,
  ContactNumber,
} from './ContactList.styled';

import {
  fetchAllContacts,
  fetchDeleteContact,
  fetchStatusContact,
} from 'redux/contacts/contactsOperations';
import { CounterContacts } from 'components/CounterContacts/CounterContacts';
import CheckBox from 'shared/CheckBox/CheckBox';

const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const contacts = useSelector(selectFilteredContacts);

  const handleContactDelete = _id => {
    dispatch(fetchDeleteContact(_id));
    toast.warning(`Contact was deleted `);
    dispatch(fetchAllContacts());
  };

  const handleToggle = _id => {
    const contact = contacts.find(item => item._id === _id);
    dispatch(fetchStatusContact(contact));
    dispatch(fetchAllContacts());
  };

  return (
    <>
      <ContactListUl>
        <CounterContacts />

        {contacts.map(({ _id, name, phone, email, favorite }) => {
          return (
            <ContactItemLi key={_id}>
              <ContactListWraper>
                <ContactName>{name}</ContactName>
                <ContactNumber>{phone}</ContactNumber>
                <ContactNumber>{email}</ContactNumber>
              </ContactListWraper>

              <ContactButtonWraper>
                <CheckBox
                  id={_id}
                  checked={favorite}
                  onChange={() => handleToggle(_id)}
                />

                <ButtonIcon
                  icon={AiOutlineDelete}
                  iconSize={20}
                  onClick={() => handleContactDelete(_id)}
                ></ButtonIcon>
              </ContactButtonWraper>
            </ContactItemLi>
          );
        })}
      </ContactListUl>
    </>
  );
};

export default ContactList;

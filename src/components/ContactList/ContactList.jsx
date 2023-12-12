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
} from 'redux/contacts/contactsOperations';
import { CounterContacts } from 'components/CounterContacts/CounterContacts';
import CheckBox from 'shared/CheckBox/CheckBox';

const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const list = useSelector(selectFilteredContacts);

  const handleContactDelete = _id => {
    dispatch(fetchDeleteContact(_id));
    toast.warning(`Contact was deleted `);
    dispatch(fetchAllContacts());
  };

  return (
    <>
      <ContactListUl>
        <CounterContacts />

        {list.map(({ _id, name, phone, email, favorite }) => {
          return (
            <ContactItemLi key={_id}>
              <ContactListWraper>
                <ContactName>{name}</ContactName>
                <ContactNumber>{phone}</ContactNumber>
                <ContactNumber>{email}</ContactNumber>
              </ContactListWraper>

              <ContactButtonWraper>
                <CheckBox checked={favorite} />

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
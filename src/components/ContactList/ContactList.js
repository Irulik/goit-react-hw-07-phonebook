import React from 'react';
import { Contacts, ContactsItem, Name, Number, Btn } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../redux/filterSlice';
import { selectContacts } from '../redux/selectors';
import { deleteContactThunk } from '../redux/operations';

const getVisibleContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const handleDelete = id => {
    dispatch(deleteContactThunk(id));
  };

  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <Contacts>
      {visibleContacts.map(contact => (
        <ContactsItem key={contact.id}>
          <div>
            <Name>• {contact.name}</Name>
            <Number>{contact.number}</Number>
          </div>
          <Btn onClick={() => dispatch(deleteContactThunk(contact.id))}
          >Delete
          </Btn>
        </ContactsItem>
      ))}
    </Contacts>
  );
};


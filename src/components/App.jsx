import React, { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useDispatch } from 'react-redux';
import { fetchContactThunk } from '../components/redux/operations';

export const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContactThunk());
    }, [dispatch]);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 20,
                color: "#010101"
            }}
        >
            <h1>PhoneBook</h1>
            <ContactForm />
            <h2>Contacts</h2>
            <Filter />
            <ContactList />
        </div>
    );
};

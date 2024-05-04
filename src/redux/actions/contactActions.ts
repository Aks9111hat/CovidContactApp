// contactActions.ts

import { Contact } from '../reducers/contactReducer';

// Define action types
export const ADD_CONTACT = 'ADD_CONTACT';
export const EDIT_CONTACT = 'EDIT_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';
export const SELECT_CONTACT = 'SELECT_CONTACT'; // Define new action type

// Define action creators
export const addContact = (contact: Contact) => ({
    type: ADD_CONTACT,
    payload: contact,
});

export const editContact = (contact: Contact) => ({
    type: EDIT_CONTACT,
    payload: contact,
});

export const deleteContact = (id: number) => ({
    type: DELETE_CONTACT,
    payload: id,
});

// Action creator for selecting a contact
export const selectContact = (id: number) => ({
    type: SELECT_CONTACT,
    payload: id,
});

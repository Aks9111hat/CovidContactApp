// contactReducer.ts

import { ADD_CONTACT, EDIT_CONTACT, DELETE_CONTACT } from '../actions/contactActions';

export interface Contact {
    id: number; // Change id to number type
    firstName: string;
    lastName: string;
    status: string;
    // Add other contact fields as needed
}

interface ContactState {
    contacts: Contact[];
    lastId: number; // Track the last used id
}

const initialState: ContactState = {
    contacts: [],
    lastId: 0, // Initialize lastId to 0
};

const contactReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_CONTACT:
            const newContact = {
                ...action.payload,
                id: state.lastId + 1, // Generate new id
            };
            return {
                ...state,
                contacts: [...state.contacts, newContact],
                lastId: state.lastId + 1, // Increment lastId
            };
        case EDIT_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map(contact =>
                    contact.id === action.payload.id ? action.payload : contact
                ),
            };
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload),
            };
        default:
            return state;
    }
};

export default contactReducer;

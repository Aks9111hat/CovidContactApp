// ContactList.tsx

import React from 'react';
import { Contact } from '../redux/reducers/contactReducer';

interface ContactListProps {
    contacts: Contact[];
    onViewDetails: (id: number) => void;
}

const ContactList: React.FC<ContactListProps> = ({ contacts, onViewDetails }) => {
    return (
        <div>
            <h2>Contact List</h2>
            <ul>
                {contacts.map(contact => (
                    <li key={contact.id}> {/* Assign unique key to each list item */}
                        {contact.firstName} - <button onClick={() => onViewDetails(contact.id)}>View Details</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContactList;

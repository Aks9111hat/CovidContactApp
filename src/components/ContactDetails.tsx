import React from 'react';

interface ContactDetailsProps {
    contact: {
        id: string;
        fname: string;
        lname: string;
        status: string;
    };
}

const ContactDetails: React.FC<ContactDetailsProps> = ({ contact }) => {
    return (
        <div>
            <h2>Contact Details</h2>
            <p>ID: {contact.id}</p>
            <p>Name: {contact.fname}</p>
            <p>Name: {contact.lname}</p>
            <p>Name: {contact.status}</p>
        </div>
    );
};

export default ContactDetails;

// ContactCard.tsx

import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/actions/contactActions';

interface ContactCardProps {
    contact: {
        id: number;
        firstName: string;
        lastName: string;
        status: string;
    };
    onEdit: (contact: any) => void; // Function to handle edit action
}

const ContactCard: React.FC<ContactCardProps> = ({ contact, onEdit }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteContact(contact.id));
    };

    return (
        <div className='flex flex-col justify-center items-center rounded p-5 m-5 bg-cyan-300'>
            <div className='rounded-tl-lg rounded-br-lg bg-sky-300 p-5'>
                {/* <p>ID: {contact.id}</p> */}
                <p>First Name: {contact.firstName}</p>
                <p>Last Name: {contact.lastName}</p>
                <p>Status: {contact.status}</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <button className='rounded bg-green-600 px-10 p-2 m-2 ' onClick={() => onEdit(contact)}>Edit</button>
                <button className='rounded bg-red-600 px-10 p-2 m-2 ' onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
};

export default ContactCard;

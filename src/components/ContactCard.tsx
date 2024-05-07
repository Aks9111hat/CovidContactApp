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
        <div className='flex flex-col justify-center items-center rounded-lg border-solid border-2 border-black-500 p-5 m-5 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none '>
            <div className='rounded-tl-lg rounded-br-lg p-5 text-center text-xl'>
                {/* <p>ID: {contact.id}</p> */}
                <p>First Name: {contact.firstName}</p>
                <p>Last Name: {contact.lastName}</p>
                <p>Status: {contact.status}</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <button className='transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-green-400 duration-300 rounded bg-green-600 px-10 p-2 m-2 ' onClick={() => onEdit(contact)}>Edit</button>
                <button className='transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-red-400 duration-300 rounded bg-red-600 px-10 p-2 m-2 ' onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
};

export default ContactCard;

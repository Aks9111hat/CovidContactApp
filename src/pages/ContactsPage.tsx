// ContactsPage.tsx

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import ContactCard from '../components/ContactCard';
import ContactForm from '../components/ContactForm';
import EditContactForm from '../components/EditContactForm';

const ContactsPage: React.FC = () => {
    const contacts = useSelector((state: RootState) => state.contacts.contacts);
    const [isCreating, setIsCreating] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editingContact, setEditingContact] = useState<any>(null);

    const handleCreateContact = () => {
        setIsCreating(true);
    };

    const handleEditContact = (contact: any) => {
        setIsEditing(true);
        setEditingContact(contact);
    };

    const handleContactAdded = () => {
        setIsCreating(false);
    };

    const handleContactEdited = () => {
        setIsEditing(false);
        setEditingContact(null);
    };

    return (
        <div className='w-full flex flex-col justify-center items-center'>
            {isCreating ? (
                <ContactForm onContactAdded={handleContactAdded} />
            ) : isEditing ? (
                <EditContactForm contact={editingContact} onClose={handleContactEdited} />
            ) : (
                <div className='h-full flex flex-col justify-center items-center'>
                    {contacts.length === 0 ? (
                        <div className='h-full flex flex-col justify-around items-center'>
                            <button onClick={handleCreateContact} className='p-4 bg-slate-300 rounded sm:text-lg md:text-xl lg:text-3xl'>Create Contact</button>
                            <p className='p-4 bg-slate-300 flex flex-row justify-around items-center sm:text-lg md:text-xl lg:text-3xl'> <img src="/not-found.png" alt="Not Found img" className='w-20 m-4' /> <span>No contacts found. <br /> Please add contacts from Create Contact Button.</span> </p>
                        </div>
                    ) : (
                        <div className='flex flex-col justify-center items-center'>
                            <button onClick={handleCreateContact} className='p-4 bg-slate-300 rounded sm:text-lg md:text-xl lg:text-3xl'>Create Contact</button>
                            <div className='flex flex-row justify-center items-center p-10'>
                                {contacts.map(contact => (
                                    <ContactCard key={contact.id} contact={contact} onEdit={handleEditContact} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ContactsPage;

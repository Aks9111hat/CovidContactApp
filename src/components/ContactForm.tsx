import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/actions/contactActions';

interface ContactFormProps {
    onContactAdded: () => void; // Callback function to be called after contact is added
}

const ContactForm: React.FC<ContactFormProps> = ({ onContactAdded }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [status, setStatus] = useState('active'); // State for managing status
    const dispatch = useDispatch();

    // State to keep track of the last used id
    const [lastId, setLastId] = useState(0);



    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newId = lastId + 1;
        setLastId(newId);

        dispatch(addContact({ id: newId, firstName, lastName, status }));

        setFirstName('');
        setLastName('');
        setStatus('active');

        onContactAdded(); // Call the callback function to switch back to contact list view
    };

    return (
        <div className='h-screen flex flex-col justify-center items-center'>
            <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center p-5 rounded-lg border-solid border-2 '>
                <div className='flex flex-row justify-center items-center p-2'>
                    <label htmlFor="First Name" className='p-2'>First Name:</label>
                    <input
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className='p-2 border-2 border-sky-500'
                        required
                    />
                </div>
                <div className='flex flex-row justify-center items-center p-2'>
                    <label htmlFor="First Name" className='p-2'>Last Name:</label>
                    <input
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className='p-2 border-2 border-sky-500'
                        required
                    />
                </div>

                <div className='w-full flex flex-row justify-between items-center p-2'>
                    <h1 className='p-3'>status:</h1>
                    <div className=' flex flex-col justify-center items-start px-10 mx-10'>
                        <label>
                            <input
                                type="radio"
                                value="active"
                                checked={status === 'active'}
                                onChange={() => setStatus('active')}
                            />
                            Active
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="inactive"
                                checked={status === 'inactive'}
                                onChange={() => setStatus('inactive')}
                            />
                            Inactive
                        </label>
                    </div>

                </div>
                <button type="submit" className='transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-500 duration-300 p-3 rounded bg-cyan-300'>Add Contact</button>
            </form>
        </div>

    );
};

export default ContactForm;

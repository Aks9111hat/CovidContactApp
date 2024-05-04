// redux/store/index.ts

import { configureStore } from '@reduxjs/toolkit';
import contactReducer from '../reducers/contactReducer';

const store = configureStore({
    reducer: {
        contacts: contactReducer,
        // Add other reducers here if needed
    },
});

export type RootState = ReturnType<typeof store.getState>; // Export RootState type
export default store;

// App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactsPage from './pages/ContactsPage';
import ChartsAndMapsPage from './pages/ChartAndMapsPage';
import Sidebar from './components/Sidebar';
import { Provider } from 'react-redux'; // Import Provider
import store from './redux/store'; // Import your Redux store

const App: React.FC = () => {
  return (
    <Provider store={store}> {/* Wrap your entire application with Provider */}
      <Router>
        <div className="flex h-full">
          <Sidebar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/charts-and-maps" element={<ChartsAndMapsPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;

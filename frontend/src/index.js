import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './index.css';
import App from './App';
import Chatbot from './components/Chatbot.jsx'
// import About from './pages/About';
// import Contact from './pages/Contact';
import reportWebVitals from './reportWebVitals';
import MeditimeForm from './components/MeditimeForm.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/meditime" element={<MeditimeForm />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();

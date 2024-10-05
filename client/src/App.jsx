import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Index';
import ContactUs from '../src/Pages/Home/ContactUs.jsx';
import './App.css';
import Footer from './Pages/Home/Footer.jsx';
import { useState } from 'react';
import Loader from './Components/Loader.jsx';

function App() {
  
const [showLoader, setShowLoader] = useState(false);

  return (
    <>
      <div >
        <BrowserRouter>
        { showLoader ? <Loader /> : null }
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<>
      <ContactUs />
      <Footer />
    </>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

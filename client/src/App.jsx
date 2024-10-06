import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Index';
import ContactUs from './Pages/Home/ContactUs.jsx';
import './App.css';
import Footer from './Pages/Home/Footer.jsx';
import { useState } from 'react';
import Loader from './Components/Loader.jsx';
import { ThemeProvider } from './context/theme.jsx';  // Ensure this import is correct

function App() {
  const [showLoader, setShowLoader] = useState(false);

  return (
    <ThemeProvider>
      <div>
        <BrowserRouter>
          {showLoader ? <Loader /> : null}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<><ContactUs /><Footer /></>} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;

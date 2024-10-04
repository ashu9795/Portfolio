import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Index';
import ContactUs from '../src/Pages/Home/ContactUs.jsx';
import './App.css';
import Footer from './Pages/Home/Footer.jsx';


function App() {
  


  return (
    <>
      <div >
        <BrowserRouter>
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

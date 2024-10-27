import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Index';
import Admin from './Pages/Admin/Index.jsx';
import ContactUs from './Pages/Home/ContactUs.jsx';
import './App.css';
import Footer from './Pages/Home/Footer.jsx';
import { useState, useEffect } from 'react';  // Added useEffect import
import Loader from './Components/Loader.jsx';
import { ThemeProvider } from './context/theme.jsx';  // Ensure this import is correct
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { SetPortfolioData } from './redux/rootSlice.js';



function App() {
  const [showLoader, setShowLoader] = useState(false);

  const { loading, portfolioData } = useSelector((state) => state.root);
  const dispatch = useDispatch();

  const getPortfolioData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/v1/main/data");  // Fixed typo
   
      dispatch(SetPortfolioData(response.data.message));
   
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPortfolioData();
  }, []);

  useEffect(() => {
    console.log(portfolioData);


  },[portfolioData]);

  return (
    <ThemeProvider>
      <div>
        <BrowserRouter>
          {loading ? <Loader /> : null}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<><ContactUs /><Footer /></>} />
            <Route path = "/Admin" element = {<Admin/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './Pages/Page';


import { useState } from 'react';

function App() {


  return (
    <>
      
     
     <Router>
       <Routes>
         <Route path="/" index element={<Home />} />
         <Route path="*" element={<Navigate to="/" />} />
         
       </Routes>
     </Router>
         
    </>
  );
}

export default App;
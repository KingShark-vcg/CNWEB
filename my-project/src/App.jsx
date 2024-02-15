import React from 'react'
import {Routes, Route } from "react-router-dom";
import Main from './Page/Main.jsx';
import ProductComponent from './Page/Product.jsx';
// import Navbar from './Component/Navbar/Navbar.jsx';
// import Body from './Component/Body/Body.jsx';
// import Footer from './Component/Footer/Footer.jsx';


export default function App() {
  return (
    <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/product' element={<ProductComponent/>}/>
    </Routes>
  )
}
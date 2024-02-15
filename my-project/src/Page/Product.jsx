import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Component/Navbar/Navbar';
import Footer from '../Component/Footer/Footer';
import Body_Product from '../Component/Body/Body_Product';

function ProductComponent(props) {
  console.log("Data", props)
  return (
    <div>
      <Navbar/>
      <Body_Product/>
      <Footer/>
    </div>
    
  );
}

export default ProductComponent;
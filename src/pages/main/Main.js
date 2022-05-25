import React from 'react';
import Nav from '../../components/nav/Nav';
import Footer from '../../components/footer/Footer';
import Cart from '../cart/Cart';
const Main = () => {
  return (
    <div className="main">
      <Nav />
      <Cart />
      <Footer />
    </div>
  );
};

export default Main;

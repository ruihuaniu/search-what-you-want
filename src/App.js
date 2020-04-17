import React from 'react';

import './App.scss';
import SearchBar from './components/SearchBar/SearchBar';
import ProductsContainer from './components/ProductsContainer/ProductsContainer';
import Footer from './components/Footer/Footer';
import ProductDetail from './components/ProductsContainer/ProductDetail/ProductDetail';
import MainRouter from './MainRouter';

function App() {
  return (

    <div className="app-container">
      {/* <ProductsContainer /> */}
      <MainRouter />
      <Footer />
    </div>


  );
}

export default App;

import React from 'react';
import './App.scss';
import SearchBar from './components/SearchBar/SearchBar';
import ProductsContainer from './components/ProductsContainer/ProductsContainer';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app-container">
      <ProductsContainer />
      <Footer />
    </div>
  );
}

export default App;

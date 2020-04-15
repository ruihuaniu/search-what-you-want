import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import ProductsDisplay from './components/ProductsDisplay';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <SearchBar />
      <ProductsDisplay />
      <Footer />
    </div>
  );
}

export default App;

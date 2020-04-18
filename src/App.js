import React from 'react';

import './App.scss';
import SearchBar from './components/SearchBar/SearchBar';
import Footer from './components/Footer/Footer';
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

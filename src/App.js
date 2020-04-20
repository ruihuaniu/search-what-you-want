import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.scss';
import { ProductContext } from './components/ProductContext.js'
import SearchBar from './components/SearchBar/SearchBar';
import Footer from './components/Footer/Footer';
import MainRouter from './MainRouter';

function App() {

  const data = [
    { catalog_number: 1, name: "Product1", image: "/images/product.jpg", category: "category1", price: 9.99, unit: "AUD" },
    { catalog_number: 2, name: "Product2", image: "/images/product.jpg", category: "category2", price: 19.99, unit: "AUD" },
    { catalog_number: 3, name: "Product3", image: "/images/product.jpg", category: "category3", price: 29.99, unit: "AUD" },
    { catalog_number: 4, name: "Product4", image: "/images/product.jpg", category: "category1", price: 39.99, unit: "AUD" },
    { catalog_number: 5, name: "Product5-1", image: "/images/product.jpg", category: "category2", price: 49.99, unit: "AUD" },
    { catalog_number: 6, name: "Product5-2", image: "/images/product.jpg", category: "category3", price: 59.99, unit: "AUD" },
    { catalog_number: 7, name: "Product5-3", image: "/images/product.jpg", category: "category1", price: 9.99, unit: "AUD" },
    { catalog_number: 8, name: "Product5-4", image: "/images/product.jpg", category: "category2", price: 19.99, unit: "AUD" },
    { catalog_number: 9, name: "Product6-1", image: "/images/product.jpg", category: "category3", price: 29.99, unit: "AUD" },
    { catalog_number: 10, name: "Product6-2", image: "/images/product.jpg", category: "category1", price: 39.99, unit: "AUD" }
  ]

  const [products, setProducts] = useState(data)




  return (
    <Router>
      <div className="app-container">
        {/* <ProductsContainer /> */}
        <ProductContext.Provider value={{ products, setProducts, data }} >
          {/* <SearchBar data={data} /> */}
          <MainRouter />
          <Footer />
        </ProductContext.Provider>

      </div>

    </Router>


  );
}

export default App;

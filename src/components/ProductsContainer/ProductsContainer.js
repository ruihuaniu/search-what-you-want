import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazyload'
import './ProductsContainer.scss'
import SearchBar from '../SearchBar/SearchBar'
import ProductDetail from './ProductDetail/ProductDetail'
import { ProductContext } from '../ProductContext'



function ProductsContainer() {


    const { products, setProducts, data } = useContext(ProductContext)
    console.log("products is:", products);

    return (

        <div className="main-container">
            {/* <SearchBar /> */}

            <div className="products-container">

                {products.map((item) => {
                    return (

                        <LazyLoad key={item.catalog_number} height={200} offset={[-100, 50]}>
                            <Link to={{ pathname: `/shop/${item.name}`, item: item }}>
                                <div className="product-card">
                                    <img src={item.image} alt="product" />
                                    <div className="product-title">{item.name}</div>
                                    <div className="product-category">{item.category}</div>
                                    <div className="product-price">{item.price}<span className="product-unit">{item.unit}</span></div>
                                    <div className="buy-button">View Details</div>
                                </div>
                            </Link>
                        </LazyLoad>

                    )
                })}

            </div>

        </div>


    )
}

export default ProductsContainer

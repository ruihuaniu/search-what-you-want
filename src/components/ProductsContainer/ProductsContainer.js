import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazyload'
import './ProductsContainer.scss'
import SearchBar from '../SearchBar/SearchBar'
import ProductDetail from './ProductDetail/ProductDetail'



function ProductsContainer() {

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

    const [products, setProdcuts] = useState(data)

    return (

        <div className="main-container">
            <SearchBar setProducts={setProdcuts} data={data} />
            <div className="products-container">

                {products.map((item) => {
                    return (

                        <LazyLoad key={item.catalog_number} height={200} offset={[-100, 50]}>
                            <Link to={{ pathname: item.name, data: item.price }}>
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

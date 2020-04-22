import React from 'react'
import { useParams, useLocation, useRouteMatch, useHistory } from 'react-router-dom'
import './ProductDetail.scss'
import SearchBar from '../../SearchBar/SearchBar';

function ProductDetail() {

    const { item } = useLocation();
    console.log("item is :", item);

    return (
        <div className="main-container">

            <div className="product-detail-container">

                <div className="product-left-container">
                    <img src={item && item.image} alt="product" />
                </div>
                <div className="product-right-container">
                    <h1>{item && item.name}</h1>
                    <h2>{item && item.price + item.unit}</h2>
                    <h3>{item && item.category}</h3>
                    <h2>Product details page</h2>
                </div>

            </div>
        </div>

    )
}

export default ProductDetail

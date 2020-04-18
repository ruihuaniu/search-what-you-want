import React from 'react'
import { useParams } from 'react-router-dom'
import './ProductDetail.scss'

function ProductDetail() {
    let { title } = useParams();

    return (
        <div className="product-detail-container">
            <div className="product-left-container">
                <img src="/images/product.jpg" alt="product" />
            </div>
            <div className="product-right-container">
                <h1>{title}</h1>
                <h2>Product details page</h2>
            </div>

        </div>
    )
}

export default ProductDetail

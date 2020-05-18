import React, { useContext } from 'react'
import { useParams, useLocation, useRouteMatch, useHistory } from 'react-router-dom'
import './ProductDetail.scss'
import SearchBar from '../../SearchBar/SearchBar';
import { ProductContext } from '../../ProductContext';

function ProductDetail() {

    let { item } = useLocation();
    const pageTitle = useParams();
    const { data } = useContext(ProductContext)
    // console.log("item is :", item);

    if (!item) {
        item = data.filter((item) => item.title === pageTitle.title)[0]
        // console.log("new item is :", item);
    }


    return (
        <div className="main-container">
            <div className="product-detail-container">
                <div className="product-left-container">
                    <img src={item && item.image} alt="product" />
                </div>
                <div className="product-right-container">
                    <h1><a href={item && item.link} target="_blank" rel="noopener noreferrer">{item && item.title}</a> </h1>
                    {/* return item price if the price exist, else return item type */}
                    <h2>{item && ((item.price + item.unit) || item.type)}</h2>
                    <h3>{item && item.category}</h3>
                    <h2>{item && item.description}</h2>
                </div>

            </div>
        </div>

    )
}

export default ProductDetail

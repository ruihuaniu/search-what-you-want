import React, { useContext } from 'react'
import ProductsContainer from '../../components/ProductsContainer/ProductsContainer'
import { ProductContext } from '../../components/ProductContext'
import './Result.scss'

function Result() {
    const { products, category } = useContext(ProductContext)
    // console.log("product on result page ", products);


    if (Array.isArray(products)) {  // 

        // console.log(Array.isArray(products));

        return <ProductsContainer />
    } else {
        return (
            <div className="container">
                <div className="text">{products}</div>
            </div>
        )
    }

}

export default Result

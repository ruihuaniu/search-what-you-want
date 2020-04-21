import React, { useState, useContext } from 'react'
import './SearchBar.scss'
import { ProductContext } from '../ProductContext'
import { useHistory, Link } from 'react-router-dom'

function SearchBar(props) {

    //const [products, setProducts] = useContext(ProductContext)
    const { products, setProducts, data } = useContext(ProductContext)
    const history = useHistory()

    const [inputValue, setInputValue] = useState("")
    const [validateResult, setValidateResult] = useState(true)

    const handleSubmit = (e) => {


        console.log("history is: ", history);
        if (history.location.pathname !== "/shop") {
            console.log("history pathname", history.pathname);

            //history.goBack()
            history.push('/shop')
        }

        console.log(inputValue);
        console.log("data is: ", data);
        const result = data.filter((item) => { return item.name.toLowerCase().includes(inputValue.toLowerCase()) });
        console.log("result is:", result);
        setProducts(result);
        setInputValue("");
        e.preventDefault();
    }

    const handleChange = (e) => {
        setInputValue(e.target.value)
        //const validateExpression = RegExp("[abc]{30}")
        const processedInputValue = e.target.value.split(" ").join("")

        if (processedInputValue.length > 10) {
            //setValidateResult(validateExpression.test(processedInputValue));
            setValidateResult(false)
        } else (
            setValidateResult(true)
        )

        console.log(validateResult);
    }

    return (
        <div className="searchBar-container">
            <form onSubmit={handleSubmit}>
                <input type="text" className={validateResult ? "search-input" : "search-input validate-error"}
                    placeholder="Search item name here..."
                    title="the length of your input should be within 10 characters"
                    value={inputValue} onChange={handleChange} />
                <button>Search</button>
            </form>
            {/* <div dangerouslySetInnerHTML={{ __html: inputValue }}></div> */}

        </div>
    )
}

export default SearchBar

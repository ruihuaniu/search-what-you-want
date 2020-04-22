import React, { useState, useContext } from 'react'
import classNames from 'classnames'
import './SearchBar.scss'
import { ProductContext } from '../ProductContext'
import { useHistory, Link } from 'react-router-dom'
import Header from '../Header/Header'

function SearchBar(props) {

    //const [products, setProducts] = useContext(ProductContext)
    const { products, setProducts, data } = useContext(ProductContext)
    const history = useHistory()

    const [inputValue, setInputValue] = useState("")
    const [validateResult, setValidateResult] = useState(true)
    const [warningInfo, setWarningInfo] = useState("")

    const handleSubmit = (e) => {


        console.log("history is: ", history);
        if (history.location.pathname !== "/shop") {
            console.log("history pathname", history.pathname);

            //history.goBack()
            history.push('/shop')
        }

        const result = data.filter((item) => { return item.name.toLowerCase().includes(inputValue.toLowerCase()) });
        console.log("result is:", Boolean(result));
        setProducts(result);
        if (result.length === 0) {
            setWarningInfo("Woops, no results found. Try another name :)")
        } else {
            setWarningInfo("")
        }

        // setInputValue("");
        e.preventDefault();
    }

    const handleChange = (e) => {
        setInputValue(e.target.value)
        //const validateExpression = RegExp("[abc]{30}")
        const processedInputValue = e.target.value.split(" ").join("")

        if (processedInputValue.length > 10) {
            //setValidateResult(validateExpression.test(processedInputValue));
            setValidateResult(false)
            setWarningInfo("Warning: the length of your input should be within 10 characters")
        } else {
            setValidateResult(true)
            setWarningInfo("")
        }
        console.log(validateResult);
    }

    return (
        <div className={history.location.pathname === "/" ? "searchBar-container homepage-searchBar" : "searchBar-container"}>
            {/* <Header /> */}
            <form className="searchBar-form" onSubmit={handleSubmit}>
                <input type="text" className={validateResult ? "search-input " : "search-input validate-error"}
                    placeholder="Search item name here..."
                    title="the length of your input should be within 10 characters"
                    value={inputValue} onChange={handleChange} />
                <button>Search</button>
            </form>
            {/* <div dangerouslySetInnerHTML={{ __html: inputValue }}></div> */}
            <div style={{ color: 'red' }}>{warningInfo}</div>
        </div>
    )
}

export default SearchBar

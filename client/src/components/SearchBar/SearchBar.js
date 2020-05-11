import React, { useState, useContext, useEffect } from 'react'
import classNames from 'classnames'
import './SearchBar.scss'
import { ProductContext } from '../ProductContext'
import { useHistory, Link } from 'react-router-dom'
import Header from '../Header/Header'
import bartonData from '../../data/barton-data'
import axios from 'axios'

function SearchBar(props) {


    //const [products, setProducts] = useContext(ProductContext)
    const { products, setProducts, data } = useContext(ProductContext)
    const history = useHistory()

    const [inputValue, setInputValue] = useState("")
    const [categoryValue, setCategoryValue] = useState("product")
    const [isValid, setIsValid] = useState(true)
    const [clickCount, setClickCount] = useState(null)
    const [warningInfo, setWarningInfo] = useState("")

    useEffect(() => {
        async function getData() {
            try {
                const result = await axios.get(`http://numbersapi.com/${Number(inputValue)}`)  //parse to integer
                console.log("result on search bar", result);
                setProducts(result.data)
            } catch (err) {
                console.log(err);
            }
        }
        if (categoryValue === "lucky") {
            getData()
        }
    }, [inputValue])

    const handleSubmit = (e) => {
        setClickCount((prev) => prev + 1)
        console.log("history is: ", history);
        if (history.location.pathname !== "/result") {   //navigation to result page to show the search results
            console.log("history pathname", history.pathname);
            //history.goBack()
            history.push('/result')
        }


        switch (categoryValue) {
            case "product":
                const inputFormatted = inputValue.toLowerCase();
                const result = data.filter((item) => { return item.title.toLowerCase().includes(inputFormatted) });

                console.log("result is:", result);
                if (inputFormatted.includes("melbourne")) {
                    result.push({ catalog_number: 1, title: "You got it, Congratulations", image: "/images/home-data.jpg", category: "special", description: "Product details page", price: "invaluable", unit: "" })
                }
                if (inputFormatted.includes("barton") || inputFormatted.includes("project")) {
                    result.push(...bartonData)
                }
                setProducts(result);

                if (result.length === 0) {
                    setWarningInfo("Woops, no results found. Try another name :)")
                } else if (isValid) {
                    setWarningInfo("")
                }
                break;
            case "lucky":

                products || setProducts("Lucky! wait...")   //only setProducts if products is empty
                break;



        }
        e.preventDefault();
    }

    const handleCategoryChange = (e) => {
        setCategoryValue(e.target.value);
        setWarningInfo("")
    }

    const handleChange = (e) => {
        setInputValue(e.target.value)
        // console.log("type of", Number.isInteger(parseInt(e.target.value)));

        //const validateExpression = RegExp("[abc]{30}")
        const processedInputValue = e.target.value.split(" ").join("")
        if (categoryValue === "lucky" && !Number.isInteger(Number(e.target.value))) {
            setIsValid(false)
            setWarningInfo("Warning: your input should be an integer")
        } else {
            if (processedInputValue.length > 10) {
                //setIsValid(validateExpression.test(processedInputValue));
                setIsValid(false)
                setWarningInfo("Warning: the length of your input should be within 10 characters")
            } else {
                setIsValid(true)
                setWarningInfo("")
            }
        }

        // console.log(isValid);
    }

    return (
        <div className={history.location.pathname === "/" ? "searchBar-container homepage-searchBar" : "searchBar-container"}>
            {/* <Header /> */}
            <form className="searchBar-form" onSubmit={handleSubmit}>
                <select type="text" className="search-category"
                    value={categoryValue}
                    onChange={handleCategoryChange}
                >
                    <option value="product">Product</option>
                    <option value="lucky">Lucky No.</option>
                </select>

                <input type="text" className={isValid ? "search-input " : "search-input validate-error"}
                    placeholder="Search item name here..."
                    title="Try 'barton' to see the result :) "
                    value={inputValue} onChange={handleChange} />
                <button>Search</button>
            </form>
            {/* <div dangerouslySetInnerHTML={{ __html: inputValue }}></div> */}
            <div style={{ color: 'red' }}>{warningInfo}</div>
        </div>
    )
}

export default SearchBar

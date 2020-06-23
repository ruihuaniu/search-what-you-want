import React, { useState, useContext, useEffect } from 'react'
import './SearchBar.scss'
import { ProductContext } from '../ProductContext'
import { useHistory, Link, useLocation } from 'react-router-dom'
import Header from '../Header/Header'
import bartonData from '../../data/barton-data'
import quotes from '../../data/quotes.json'
import axios from 'axios'
import { pathName } from '../../utils/RoutePathName'

function SearchBar(props) {

    //const [products, setProducts] = useContext(ProductContext)
    const { products, setProducts, category, setCategory, data } = useContext(ProductContext)
    const history = useHistory()
    // console.log("history pathname", history);
    const location = useLocation()   //not sure why history.location isn't working well in production, only works locally
    // console.log("location pathname", location);


    const [inputValue, setInputValue] = useState("")
    const [isValid, setIsValid] = useState(true)
    const [clickCount, setClickCount] = useState(null)
    const [warningInfo, setWarningInfo] = useState("")
    const [placeholder, setPlaceholder] = useState("Search item name here...")
    const [inputTitle, setInputTitle] = useState("Try 'barton' to see the result :) ")

    useEffect(() => {
        async function getData(url) {
            try {
                // const result = await axios.get(url, {                  
                //         "headers": {
                //             // "x-rapidapi-host": "numbersapi.p.rapidapi.com",
                //             //"x-rapidapi-key": "ceb11507cbmsh666fb29a389ccc2p12fc7cjsn863d8ea29b5b"  //process.env.REACT_APP_NUMBER_API_KEY
                //         }  
                // })

                let result = ""
                switch (category) {
                    case "lucky":
                        result = await axios.get(url, {
                            "headers": {
                                "x-rapidapi-host": "numbersapi.p.rapidapi.com",
                                "x-rapidapi-key": "ceb11507cbmsh666fb29a389ccc2p12fc7cjsn863d8ea29b5b"  //process.env.REACT_APP_NUMBER_API_KEY
                            }
                        })

                        setProducts(result.data.text);
                        setWarningInfo("");
                        if (!result.data.found) {  //check if the number exist
                            setWarningInfo(` :( Our bad, the number is not found, a similar number ${result.data.number} is listed below`)
                        }
                        break;
                    case "joke":
                        result = await axios.get(url, {
                            "headers": {
                                "x-rapidapi-host": "joke3.p.rapidapi.com",
                                "x-rapidapi-key": "ceb11507cbmsh666fb29a389ccc2p12fc7cjsn863d8ea29b5b"  //process.env.REACT_APP_NUMBER_API_KEY
                            }
                        })

                        setProducts(result.data.content);

                        // Method 2: Another API for joke as a backup below
                        //result = await axios.get(url)
                        //console.log("result is ", result);
                        // setProducts(result.data.value.joke);
                        // setWarningInfo("");
                        // if (result.data.type === "NoSuchQuoteException") {
                        //     setWarningInfo(" :( Our bad, the joke was not found")
                        // }


                        //console.log("input value is", typeof (inputValue));


                        // result = await axios.post("/api/v1/", {
                        //     "password": inputValue
                        // })

                        // console.log("post result is ", result.data);


                        break;

                }


                // Backup1:  a new quote api below as the numberAPI above is not working
                // const result = await axios.get("https://type.fit/api/quotes");
                // const quotes = result.data;

                //Backup2: import json data of quotes if backup1 is not working

                // if (inputValue < quotes.length) {
                //     setTimeout(() => {
                //         setProducts(quotes[inputValue]["text"])
                //     }, 500)

                // } else {
                //     setTimeout(() => {
                //         setWarningInfo(" :( Our bad, the number is not found")
                //         setProducts(quotes[0]["text"])
                //     }, 500)
                // }


            } catch (err) {
                console.log(err);
                // Use backup api to fetch data
            }
        }

        let URL = ""

        switch (category) {
            case "lucky":
                URL = `https://numbersapi.p.rapidapi.com/${Number(inputValue)}/trivia?fragment=true&notfound=floor&json=true`;
                getData(URL);
                break;
            case "joke":
                const queryValue = inputValue || Math.floor(Math.random() * 500) + 1
                //URL = `https://api.icndb.com/jokes/${Number(queryValue)}`
                URL = "https://joke3.p.rapidapi.com/v1/joke"
                getData(URL);
                break
        }

    }, [clickCount]) //dependency to invoke useEffect



    const handleSubmit = (e) => {
        setClickCount((prev) => prev + 1)
        // console.log("history is: ", history);
        if (location.pathname !== pathName.result) {   //navigation to result page to show the search results

            //history.goBack()
            history.push(pathName.result)
        }


        switch (category) {
            case "product":
                const inputFormatted = inputValue.toLowerCase();
                const result = data.filter((item) => { return item.title.toLowerCase().includes(inputFormatted) });

                // console.log("result is:", result);
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

                setProducts("Lucky! wait...")   // setProducts to welcome during the axios fetch process 
                break;
            case "joke":

                setProducts("A new joke, wait...")   // setProducts to welcome during the axios fetch process 
                break;

        }
        e.preventDefault();
    }


    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
        switch (e.target.value) {
            case "product":
                setPlaceholder("Search item name here...");
                setInputTitle("Try 'barton' to see the result :) ")
                break;
            case "lucky":
                setPlaceholder("Search lucky number here...");
                setInputTitle("Type a number to see the result :) ")
                break;
            case "joke":
                setPlaceholder("Get a joke here...");
                setInputTitle("Type a number to get a joke :) ")
                break;
            default:
                setPlaceholder("Search item name here...");
        }

        setWarningInfo("")
        setInputValue("")

    }

    const handleChange = (e) => {
        setInputValue(e.target.value)
        // console.log("type of", Number.isInteger(parseInt(e.target.value)));

        //const validateExpression = RegExp("[abc]{30}")
        const processedInputValue = e.target.value.split(" ").join("")
        if ((category === "lucky" || category === "joke") && !Number.isInteger(Number(e.target.value))) {
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
        <div className={location.pathname === pathName.home ? "searchBar-container homepage-searchBar" : "searchBar-container"}>
            {/* <Header /> */}
            <form className="searchBar-form" onSubmit={handleSubmit}>
                <select type="text" className="search-category"
                    value={category}
                    onChange={handleCategoryChange}
                >
                    <option value="product">Product</option>
                    <option value="lucky">Lucky Number</option>
                    <option value="joke">Joke</option>
                </select>

                <input type="text" className={isValid ? "search-input " : "search-input validate-error"}
                    placeholder={placeholder}
                    title={inputTitle}
                    value={inputValue} onChange={handleChange} />
                <button>Search</button>
            </form>
            {/* <div dangerouslySetInnerHTML={{ __html: inputValue }}></div> */}
            <div style={{ color: 'red', padding: 15 }}>{warningInfo}</div>
        </div>
    )
}

export default SearchBar

import React, { useState } from 'react'
import './SearchBar.scss'

function SearchBar(props) {

    const [inputValue, setInputValue] = useState()

    const handleSubmit = (e) => {
        console.log(inputValue);
        console.log("data is: ", props.data);
        const result = props.data.filter((item) => { return item.name.toLowerCase().includes(inputValue.toLowerCase()) });
        console.log("result is:", result);

        props.setProducts(result)
        e.preventDefault();
    }

    const handleChange = (e) => {
        // const processedInputValue = e.target.value.split(" ").join("")
        // setInputValue(processedInputValue)
        setInputValue(e.target.value)
        console.log(e.target.value);

    }

    return (
        <div className="searchBar-container">
            <form onSubmit={handleSubmit}>
                <input type="tel" pattern="[0-9]{4}[0-9]{3}[0-9]{3}" placeholder="1231 451 678" title="the lenght of your phone number should be within 10" value={inputValue} onChange={handleChange} />
                <button>Search</button>
            </form>
            {/* <div dangerouslySetInnerHTML={{ __html: inputValue }}></div> */}
        </div>
    )
}

export default SearchBar

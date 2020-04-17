
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import ProductDetail from './components/ProductsContainer/ProductDetail/ProductDetail'
import ProductsContainer from './components/ProductsContainer/ProductsContainer'



function MainRouter() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={ProductsContainer} />
                    <Route path="/item" component={ProductDetail} />>
                 </Switch>
            </div>
        </Router>
    )
}

export default MainRouter

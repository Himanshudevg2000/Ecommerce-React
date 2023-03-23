import React,{Fragment} from "react";
import Header from "./Header";
import ProductList from "./ProductList";
import classes from './Home.module.css'

const Home = ()=> {

    return(
        <Fragment>
            <Header/>
            <div className={classes.heading}>
                <h1>THE GENERICS</h1>
            </div>
            <ProductList/>
            {/* <Product products={productsArr} /> */}
        </Fragment>
    )
}

export default Home;
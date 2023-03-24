import React, { Fragment } from 'react'
import classes from './ProductList.module.css'

const ProductList = (props) => {


    const productsArr = [
        {
            title: 'Colors',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        },
        {
            title: 'Black and white Colors',
            price: 50,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        },
        {
            title: 'Yellow and Black Colors',
            price: 70,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        },
        {
            title: 'Blue Color',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        }
    ]

    const ItemList = productsArr.map((item) => (
        <div className={classes.stylediv}>

            <div className={classes.mainDIv}>
                <div className={classes.title}>
                    <span>{item.title}</span>
                </div>
                <div className={classes.img}>
                    <img src={item.imageUrl} alt={item.title} />
                </div>
                <div className={classes.pricebtn}>
                    <span> {item.price} Rs</span>
                    <button className={classes.addBtn}>Add to Cart</button>
                </div>
            </div>
        </div>
    ))


    return (
        <Fragment> {ItemList} </Fragment>
    )
}

export default ProductList;
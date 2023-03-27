import { useParams } from "react-router-dom";
import { Fragment, useState } from "react";

import classes from './ProductDetail.module.css'

const ProductDetail = () => {
    const params = useParams();
    const id = params.productId;

    const detailarray = [
        [
            "https://images.bewakoof.com/t1080/men-s-purple-john-wick-graphic-printed-t-shirt-584908-1679395893-1.jpg",
            "https://images.bewakoof.com/t1080/men-s-purple-john-wick-graphic-printed-t-shirt-584908-1679395899-2.jpg",
            "https://images.bewakoof.com/t1080/men-s-purple-john-wick-graphic-printed-t-shirt-584908-1679395910-4.jpg",
            "https://images.bewakoof.com/t96/men-s-purple-john-wick-graphic-printed-t-shirt-584908-1679395915-5.jpg"
        ],
        [
            "https://images.bewakoof.com/t1080/men-s-white-marvel-t-shirt-390747-1679048273-1.jpg",
            "https://images.bewakoof.com/t1080/men-s-white-marvel-t-shirt-390747-1679048278-2.jpg",
            "https://images.bewakoof.com/t1080/men-s-white-marvel-t-shirt-390747-1679048284-3.jpg",
            "https://images.bewakoof.com/t1080/men-s-white-marvel-t-shirt-390747-1679048300-6.jpg"
        ],
        [
            "https://images.bewakoof.com/t1080/certified-troublemakers-half-sleeve-t-shirt-tjl-black-287865-1679048495-1.jpg",
            "https://images.bewakoof.com/t1080/certified-troublemakers-half-sleeve-t-shirt-tjl-black-287865-1679048511-4.jpg",
            "https://images.bewakoof.com/t1080/certified-troublemakers-half-sleeve-t-shirt-tjl-black-287865-1679048517-5.jpg",
            "https://images.bewakoof.com/t1080/certified-troublemakers-half-sleeve-t-shirt-tjl-black-287865-1679048500-2.jpg"
        ],
        [
            "https://images.bewakoof.com/t1080/men-s-brown-one-punch-man-graphic-printed-oversized-t-shirt-583495-1679034778-1.jpg",
            "https://images.bewakoof.com/t1080/men-s-brown-one-punch-man-graphic-printed-oversized-t-shirt-583495-1679034784-2.jpg",
            "https://images.bewakoof.com/t1080/men-s-brown-one-punch-man-graphic-printed-oversized-t-shirt-583495-1679034800-5.jpg",
            "https://images.bewakoof.com/t1080/men-s-brown-one-punch-man-graphic-printed-oversized-t-shirt-583495-1679034805-6.jpg"
        ]
    ]

    const nameArray = [
        "Purple tshirt",
        "White tshirt",
        "Black tshirt",
        "gray tshirt",
    ];


    const dynamicArray = detailarray.filter((array) => {
        return array;
    });
    const finalpics = dynamicArray[id - 1].map((image) => {
        return <img src={image} alt="tshirt" className="pics" />;
    });

    const [largeimage, setLarge] = useState(finalpics[0].props.src);
    const enlargedImage = (event) => {
        setLarge(event.target.src);
    };

    return (
        <Fragment>
            <div className={classes.maindiv}>
                <div className={classes.detailimages} onClick={enlargedImage}>
                    {finalpics}
                </div>
                <div className={classes.enlarged}>
                    <h1 className={classes.heading}>{nameArray[id - 1]}</h1>
                    <img src={largeimage} alt="tshirt" className={classes.enlargedimage} />
                </div>
            </div>

        </Fragment>
    )
}

export default ProductDetail;
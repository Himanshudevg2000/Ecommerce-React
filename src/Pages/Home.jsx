import React from "react";
import classes from './Home.module.css'

const Home = () => {
    return (
        <section class={classes.container}>
            <h2>T-SHIRTS</h2>
            <div className={classes.Products}>
                <div className={classes.album}>
                    <h3>1</h3>
                    <div >
                        < img class="prod-images"
                            src="https://images.bewakoof.com/t640/godspeed-oversized-fit-t-shirt-539977-1662114511-1.jpg"
                            alt="" />
                    </div>
                </div>
                <div className={classes.album}>
                    <h3>2</h3>
                    <div class="image-container">
                        <img class="prod-images"
                            src="https://images.bewakoof.com/t640/men-s-white-bad-puddy-tat-club-graphic-printed-oversized-t-shirt-539971-1662123032-1.jpg"
                            alt=""/>
                    </div>
                </div>
                <div className={classes.album}>
                    <h3>3</h3>
                    <div class="image-container">
                        <img class="prod-images"
                            src="https://images.bewakoof.com/t640/men-s-yellow-bad-puddy-tat-club-graphic-printed-t-shirt-539976-1662122963-1.jpg"
                            alt=""/>
                    </div>
                </div>
                <div className={classes.album}>
                    <h3>4</h3>
                    <div class="image-container">
                        <img class="prod-images"
                            src="https://images.bewakoof.com/t640/gohan-half-sleeve-t-shirt-512884-1655993277-1.jpg" alt=""/>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Home;
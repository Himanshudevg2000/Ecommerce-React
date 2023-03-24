import React from "react";
import classes from './Footer.module.css'

const Footer = () => {
    return (
        <div className={classes.footer}>
            <div >
                <h4>
                    ©Copyright 2023, The Generics | All Rights Reserved
                </h4>
            </div>
            <div className={classes.imgtag}>
                <a href="https://github.com/" >
                    <img
                        src="https://www.bing.com/th?id=OIP.ckeUFk-yid0vfWnd56w7wAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                        alt="GitHub"
                        height="25px"
                        width="25px"
                    />
                </a>
                <a href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2F" >
                    <img
                        src="https://www.bing.com/th?id=OIP.X-3PgW1kZj3OFpeSAXjxuwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                        alt="LinkedIn"
                        height="25px"
                        width="25px"
                    />
                </a>
                <a href="https://facebook.com" >
                    <img
                        src="https://www.bing.com/th?id=OIP.bOdxtMx_BX8ICFq2szS3HwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
                        alt="facebook"
                        height="25px"
                        width="25px"
                    />
                </a>
            </div>
        </div>
    );
};

export default Footer;
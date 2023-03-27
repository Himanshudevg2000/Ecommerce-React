import React from "react";
import classes from './Contact.module.css'

const Contact = () => {
    return (
        <form className={classes.form}  >
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Enter Name" />
            <label htmlFor="email">Email Id</label>
            <textarea type="textarea"  placeholder="Enter email" />
            <label htmlFor="releasedate">Release Date</label>
            <input type="date" />
            <button >Add</button>
        </form>
    )
}

export default Contact;
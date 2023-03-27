import React,{ useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from './Signup.module.css';

const SignUp=()=> {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(()=> {
        const auth = localStorage.getItem('user');
        if(auth){
            navigate("/login")
        }
    })
    
    const collectData= async ()=> {
        console.warn(name,email,password);
        let result = await fetch("http://localhost:5000/api/v1/user/signup", {
            method: "post",
            body: JSON.stringify({name,email,password}),
            headers: {
                "Content-Type": "application/json"
            },
        });
        result = await result.json();
        // localStorage.setItem("user",JSON.stringify(result))
        navigate('/login')
        console.log(result);
    }
    return(
        <div>
            <input className={classes.inputBox} type="text" value={name} onChange={(e)=> setName(e.target.value)} placeholder="Enter Name" />
            <input className={classes.inputBox} type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Enter Email" />
            <input className={classes.inputBox} type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Enter Password" />
            <button onClick={collectData} className={classes.btnSubmit} type="button" >SignUp</button>
        </div>
    )
}

export default SignUp;
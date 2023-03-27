import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from './Signup.module.css'


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(()=> {
        const auth = localStorage.getItem("user");
        if(auth){
            navigate('/')
        }
    })

    const handleLogin = async () => {
        console.warn(email, password);
        let result = await fetch("http://localhost:5000/api/v1/user/login", {
            method: "post",
            body: JSON.stringify({ email, password }),
            headers: {
                "Content-Type": "application/json"
            },
        });
        result = await result.json();
        console.log(result)
        if (result.data) {
            localStorage.setItem("user", JSON.stringify(result.data));
            navigate("/")
        }
        else {
            alert("please fill correct details");
        }
    }

    return (
        <div>
            <input className={classes.inputBox} type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input className={classes.inputBox} type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin} className={classes.btnSubmit} type="button" >Login</button>
        </div>
    )
}

export default Login;
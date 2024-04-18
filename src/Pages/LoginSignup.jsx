import React, { useState } from 'react'
import './CSS/LoginSignup.css'

export const LoginSignup = () => {
    const [state, setState] = useState("Login");
    const [formData, setFormData] = useState({
        name: "",
        password: "",
        email: ""
    })

    const changeHandler = (e) => {

        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const login = async () => {
        console.log("Login", formData);
        let respData;
        await fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                Accept: 'application/form-data',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
        }).then((resp) => resp.json()).then((data) => respData = data)

        if(respData.success){
            localStorage.setItem("auth-token",respData.token);
            window.location.replace("/")
        }
        else{
            alert(respData.errors);
        }
    }

    const signup = async () => {
        console.log("Sign Up", formData);
        let respData;
        await fetch('http://localhost:4000/createuser', {
            method: 'POST',
            headers: {
                Accept: 'application/form-data',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
        }).then((resp) => resp.json()).then((data) => respData = data)

        if(respData.success){
            localStorage.setItem("auth-token",respData.token);
            window.location.replace("/")
        }
        else{
            alert(respData.errors);
        }
    }

    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>{state}</h1>
                <div className="loginsignup-fields">
                    {state === "Sign Up" ? <input name="name" value={formData.name} onChange={changeHandler} type="text" placeholder='Name' /> : <></>}
                    <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email' />
                    <input value={formData.password} onChange={changeHandler} name='password' type="password" placeholder='Password' />
                </div>
                {state === "Sign Up" ? <button onClick={signup}>Sign Up</button> : <button onClick={login}>Login</button>}
                {state === "Sign Up" ? <p className="loginsignup-login">
                    Already have an account? <span onClick={() => { setState("Login") }}>Login</span>
                </p> :
                    <p className="loginsignup-login">
                        Create an account? <span onClick={() => { setState("Sign Up") }}>Sign Up</span>
                    </p>}
            </div>
        </div>
    )
}

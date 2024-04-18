import React, { useState } from 'react'
import './CSS/LoginSignup.css'

export const LoginSignup = () => {
    const [state, setState] = useState("Login");
    // const [formData, setFormData] = useState({
    //     name: "",
    //     password: "",
    //     email: ""
    // })

    const login = async() => {
        console.log("Login")
    }

    const signup = async() => {
        console.log("Sign Up")
    }

    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>{state}</h1>
                <div className="loginsignup-fields">
                    {state === "Sign Up" ? <input type="text" placeholder='Name' /> : <></>}
                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder='Password' />
                </div>
                {state === "Sign Up" ? <button onClick={signup}>Sign Up</button> : <button onClick={login}>Login</button>}
                {state === "Sign Up" ? <p className="loginsignup-login">
                    Already have an account? <span onClick={() => { setState("Login") }}>Login</span>
                </p> :
                    <p className="loginsignup-login">
                        Create an account? <span onClick={() => { setState("Sign Up") }}>Sign Up</span>
                    </p>}
                {/* <div className="loginsignup-agree">
                <input type="checkbox" name='' id=''/>
                <p>By Continuing I agree the terms of use and privacy.</p>
            </div> */}
            </div>
        </div>
    )
}

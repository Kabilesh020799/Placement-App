import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios'

import './Login.css'

function Login() {

    let history = useHistory();
    const [login,setLogin] = useState('')
    const [password,setPassword] = useState('')

    const submitForm = async(event) =>{
        event.preventDefault();
        
        try{
            console.log(login);
            const body = {id:login,password:password};
            await axios.post("http://localhost:5000/api/login",body)
            .then(res=>{
                if(res.data=== "Login Successful"){
                    history.push('profile')
                }
                console.log(res.data)
            })
            .catch(err=>console.log(err))
        }
        catch(err){
            console.log(err)
        }

        setLogin('')
        setPassword('')
    }

    return (
        <div className="credentials">
        <div className="credentialsbox">
        <h1 className="heading1">Login</h1>
       
        <div className="credentialsdet">
                <form className="studentlogin" onSubmit={submitForm}>
                    <input type="text" placeholder="Username" value={login} onChange={(event)=>setLogin(event.target.value)}/>
                    <br/>
                    <input type="password" placeholder="Password" value={password} onChange={(event)=>setPassword(event.target.value)}/>
                    <br/>
                    <button >Login</button>
                </form>
        </div>

        </div>
        </div>
    )
}

export default Login

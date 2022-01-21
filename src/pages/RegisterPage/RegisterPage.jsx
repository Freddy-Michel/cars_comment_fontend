import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import RegisterComponent from '../../components/RegisterComponent/RegisterComponent'
import { baseUrl } from '../../Service/Client'

export default function RegisterPage() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false);
    const [message, setMessage] = useState("")

    const hundleSubmit = async (e) =>{
        e.preventDefault();
        setError(false);
        if(username==="" && email === "" && password === ""){
            setMessage("Olana be")
            setError(true)
        }
        try{
            axios.post(`${baseUrl}/auth/signup`, {
                username,
                email,
                password
            }).then((res)=>{
                if(res.data){
                    window.location.replace('/login')
                    console.log(res.data)
                    return res.data;
                   
                }else{
                    setError(true)
                }
            })
        }catch(err){
            setError(true)
        }
    }
    return (
        <div className="container _appContainer">
            <RegisterComponent
            username={username}
            email={email}
            password={password}
            setUsername={setUsername}
            setEmail={setEmail}
            setPassword={setPassword}
            hundleSubmit={hundleSubmit}
            error={error}
            message={message}
            />
        </div>
    )
}

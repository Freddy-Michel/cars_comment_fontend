import React from 'react'
import { useState } from 'react';
import LoginComponent from '../../components/LoginComponent/LoginComponent';
import AuthService from '../../Service/auth-service'
import { useHistory } from 'react-router-dom';
export default function LoginPage() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory();

    // Login Function
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        AuthService.login(email, password).then((res)=>{
            if(res.status === 401){
                console.log("Email ou mot de passe incorrect")
            }else{
                history.push("/")
                window.location.reload();
                return res.data
            }
            
        }).catch(err=>{
            if(err.status === 401){
                console.log("Erreur de connexion")
            }
        })
    }


    
    return (
        <div className="container _appContainer">
            <LoginComponent 
                handleSubmit={handleSubmit}
                setEmail={setEmail}
                setPassword={setPassword}
                isLoading={isLoading}
            />
        </div>
    )
}

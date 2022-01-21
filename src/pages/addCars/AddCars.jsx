import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { baseUrl } from '../../Service/Client'
import AddCarsComponent from '../../components/AddCarsComponent/AddcarsComponent'

export default function AddCars() {
    const [marque, setMarque] = useState("")
    const [name, setName] = useState("")
    const [matricule, setMatricule] = useState("")
    const [error, setError] = useState(false);
    const [message, setMessage] = useState("")

    const hundleSubmit = async (e) =>{
        e.preventDefault();
        setError(false);
        if(marque==="" && name === "" && matricule === ""){
            setMessage("Olana be")
            setError(true)
        }
        try{
            axios.post(`${baseUrl}/cars`, {
                marque,
                name,
                matricule
            }).then((res)=>{
                if(res.data){
                    window.location.replace('/')
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
            <AddCarsComponent
            setMarque={setMarque}
            setName={setName}
            setMatricule={setMatricule}
            hundleSubmit={hundleSubmit}
            error={error}
            message={message}
            />
        </div>
    )
}

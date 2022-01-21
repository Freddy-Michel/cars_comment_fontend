import React from 'react'

export default function RegisterComponent({
    username,
    email,
    password,
    setUsername,
    setEmail,
    setPassword,
    hundleSubmit,
    error,
    message
}) {
    return (
        <div>
            <div className="col-12 col-md-6 loginContainer card p-4">
                <div className="pb-2 text-center">
                    <h5 className="text-info text-uppercase">Creer une compte</h5>
                </div>
                {error && 
                    <div className="alert alert-danger">
                        {message}
                    </div>
                }
                <form onSubmit={hundleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputName1">Nom et prenoms</label>
                        <input type="text" 
                            className="form-control" 
                            aria-describedby="emailHelp" 
                            placeholder="Nom et prenoms"
                            onChange={(e)=>setUsername(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Adresse email</label>
                        <input type="email" 
                            className="form-control"  
                            aria-describedby="emailHelp" 
                            placeholder="Adresse email"
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Mot de passe</label>
                        <input type="password" 
                            className="form-control" 
                            placeholder="Mot de passe"
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>
                    
                    <div className="sectionBtn">
                        <button type="submit" className="btn btn-primary">S'inscrire</button>
                        <label htmlFor="seConnecter" className="float-right">Deja une compte? <a href="/login"  className=" text-info">Se connecter</a></label>
                    </div>
                </form>
            </div>
        </div>
    )
}

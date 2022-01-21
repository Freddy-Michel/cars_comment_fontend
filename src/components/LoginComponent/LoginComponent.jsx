import React from 'react'

export default function LoginComponent({
    handleSubmit,
    setEmail,
    setPassword
}) {
    return (
        <div className="col-12 col-md-6 loginContainer card p-4">
                <div className="pb-2 text-center">
                    <h5 className="text-info text-uppercase">Se connecter</h5>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Adresse email</label>
                        <input 
                        type="email" 
                        className="form-control" 
                        aria-describedby="emailHelp" 
                        placeholder="Adresse email"
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Mot de passe</label>
                        <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Mot de passe"
                        onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>
                    <div className="sectionBtn">
                        <button type="submit" className="btn btn-primary">Se connecter</button>
                        <a href="/register"  className="float-right text-info">S'inscrire</a>
                    </div>
                </form>
            </div>
    )
}

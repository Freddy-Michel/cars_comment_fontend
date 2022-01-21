import React from 'react'

export default function AddCarsComponent({
    setMarque,
    setName,
    setMatricule,
    hundleSubmit,
    error,
    message
}) {
    return (
        <div>
            <div className="col-12 col-md-6 loginContainer card p-4">
                <div className="pb-2 text-center">
                    <h5 className="text-info text-uppercase">Ajouter une voiture</h5>
                </div>
                {error && 
                    <div className="alert alert-danger">
                        {message}
                    </div>
                }
                <form onSubmit={hundleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputName1">Marque du voiture</label>
                        <input type="text" 
                            className="form-control" 
                            aria-describedby="emailHelp" 
                            placeholder="Marque du voiture"
                            onChange={(e)=>setMarque(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Nom du vehicule</label>
                        <input type="text" 
                            className="form-control"  
                            aria-describedby="emailHelp" 
                            placeholder="Nom du voiture"
                            onChange={(e)=>setName(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Matricule</label>
                        <input type="text" 
                            className="form-control" 
                            placeholder="Matricule du voiture"
                            onChange={(e)=>setMatricule(e.target.value)}
                        />
                    </div>
                    
                    <div className="sectionBtn">
                        <button type="submit" className="btn btn-primary">Ajouter</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

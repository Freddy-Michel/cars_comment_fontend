import React from 'react'
import {IoCarSportSharp} from 'react-icons/io5';
import { Link } from 'react-router-dom';

import Paginations from '../pagination/Paginations';
import {AiOutlineSearch} from 'react-icons/ai';

export default function Listcars({
    currentPost, 
    img1, 
    postsPerPage,
    totalPage, 
    paginate,
    searchText,
    handleChange,
    setPostPerPage
}) {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(totalPage.length)
    return (
        <div>
            <div className="row">
                <div className="col-12 contentHeader">
                    <div className="listHeader">
                        <div className="float-left">
                            <h6 className="headerTitle">Liste des voiture disponibles</h6>
                            <label className="subTitleHeader">App/
                            <span className="text-info">Liste voitures</span></label>
                            
                        </div>
                        <div className="float-right">
                            <Paginations 
                                postPerPage={postsPerPage} 
                                totalPage={totalPage.length}
                                paginate={paginate}
                            />
                            
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-3 w-100">
                    <div className="input-group">
                        <div className="input-group-prepend">
                        <span className="input-group-text">
                            <AiOutlineSearch size="1em"/>
                        </span>
                        </div>
                        <input type="text" value={searchText} onChange={handleChange} className="form-control" placeholder="Search" aria-describedby="inputGroupPrepend2"/>
                    </div>
                </div>
                <div className="form-group col-md-4">
                    <select id="inputState" onChange={(e)=>setPostPerPage(e.target.value)} className="form-control">
                        <option value="">Afficher par</option>
                        <option value="6">6</option>
                        <option value="12">12</option>
                        <option value="36">36</option>
                        <option value="50">50</option>
                    </select>
                </div>
                {
                    user ? (
                        <div className="form-group col-md-4">
                            <Link to="/add_cars" className="btn btn-primary w-100">Ajouter une voiture</Link>
                        </div>
                    ):(
                        <></>
                    )
                }
            </div>
            <div className="row">
                {
                    currentPost ? (
                        <>
                            {
                                currentPost.map((cars, index)=>(
                                    <div className="col-12 col-md-6 col-lg-4 " key={index}>
                                        <div className="card  mb-4">
                                            {
                                                cars.photo ? (
                                                    <div className="card-body p-2 cardImg">
                                                        <img src={cars.photo} alt="" className="_fiara1" />
                                                    </div>
                                                ):(
                                                    <div className="card-body p-2 cardImg">
                                                        <img src={img1} alt="" className="_fiara1" />
                                                    </div>
                                                )
                                            }
                                            <div className="card-footer">
                                                <div className="d-flex cardFooter">
                                                    <div className="userProfile">
                                                        <div className="profileP">
                                                            <IoCarSportSharp size="3em" className="text-secondary mr-2"/>
                                                        </div>
                                                        <div className="_userName float-left">
                                                            <h6 className="userName">{cars.marque}</h6>
                                                            <label className="dateComment">{cars.matricule}</label>
                                                        </div>
                                                    </div>
                                                    {
                                                        user ? (
                                                            <div className="btnComment float-right">
                                                                <Link to={`/cars_details/${cars._id}`} className="float-right btn btn-secondary btn-sm">Details</Link>
                                                            </div>
                                                        ):(
                                                            <div className="btnComment float-right">
                                                                <Link to="/login" className="float-right btn btn-secondary btn-sm">Details</Link>
                                                            </div>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </>
                    ):(
                        <div className="text-danger">
                            Vide
                        </div>
                    )
                }
            </div>
            
        </div>
    )
}

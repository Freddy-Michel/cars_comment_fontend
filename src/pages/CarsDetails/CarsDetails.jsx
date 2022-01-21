import React, { useEffect, useState } from 'react'

import admin from '../../assets/images/admin.jpeg';
import img5 from '../../assets/Fiara/bmw5.jpg';

import {IoCarSportSharp} from 'react-icons/io5';

import {ListGroup,Form, Button} from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../../Service/Client';
import Paginations from '../../components/pagination/Paginations';

export default function CarsDetails() {
    const [listCar, setListCar] = useState([])
    const [comment, setComment] = useState();
    const [listComment, setListComment] = useState([])

    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(5);

    const {_id} = useParams()

    /**
     * Fetch toutes les cars
     */

    useEffect(()=> {
        const fetchdata = async () => {
            await axios.get(`${baseUrl}/cars/${_id}`)
            .then((res)=>{
              setListCar(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
        }
        fetchdata()
    }, [_id])

    /**
     * fetch les commentaires par/cars
     */
    

    console.log(listCar)


    useEffect(()=>{

        const fetchComment = async () => {
            await axios.get(`${baseUrl}/comments/${_id}`)
            .then((res)=>{
                console.log(res.data)
                setListComment(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
        }
        fetchComment()
    },[_id])

    /**
     * 
     * @param {post les commentaire} e 
     */


    const handleSubmit = async (e) =>{
        e.preventDefault();
        const listUser = []
        listUser.push(JSON.parse(localStorage.getItem('user')))
        console.log(listUser)
        
        try{
            listUser.forEach((users)=>{
                axios.post(`${baseUrl}/comments/${_id}`, {
                    comment: comment,
                    user: users.username,
                    cars: _id
                }).then((res)=>{
                    if(res.data){
                        console.log(res.data);
                        window.location.reload()
                        localStorage.setItem("cars", res.data)
                        return res.data;
                       
                    }else{
                        console.log("Erreur")
                    }
                })
            })
            
        }catch(err){
            console.log(err)
        }
    }

    const  comms = listComment.filter(comment=>{
        console.log("cars id",comment.cars)
        return (comment.cars === _id);
    });

    const indexOfLastPage = currentPage * postsPerPage;
    const IndexOfFirstPage = indexOfLastPage - postsPerPage;
    const currentPost = comms.slice(IndexOfFirstPage, indexOfLastPage)

    const paginate = (numberPage)=> {
        setCurrentPage(numberPage)
    }




    return (
        <div className="container _homePage">
            <div className="row">
                <div className="col-12 contentHeader">
                    <div className="listHeader">
                        <div className="float-left">
                            <h6 className="headerTitle">Details d'une voiture</h6>
                            <label className="subTitleHeader">App/
                            <span className="text-info">Details du voitures</span></label>
                        </div>
                        <div className="float-right">
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-5 ">
                    <div className="card  mb-4">
                        <div className="card-body p-2 cardImg">
                            <img src={img5} alt="" className="_fiaraDetail" />
                        </div>
                        <div className="card-footer">
                            <div className="d-flex cardFooter">
                                <div className="userProfile">
                                    <div className="profileP">
                                        <IoCarSportSharp size="3em" className="text-secondary mr-2"/>
                                    </div>
                                    <div className="_userName float-left">
                                        <h6 className="userName">{listCar.marque}</h6>
                                        <label className="dateComment">{new Date(listCar.createdAt).toUTCString()}</label>
                                    </div>
                                </div>
                                <div className="btnComment float-right">
                                    <button className="float-right btn btn-secondary btn-sm">Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-7 ">
                    <div className="card mb-4">
                        <div className="card-body p-2 ficheTech">
                            <ListGroup>
                                <ListGroup.Item variant="primary">MARQUE</ListGroup.Item>
                                <ListGroup.Item action variant="light">
                                    {listCar.marque}
                                </ListGroup.Item>
                                <ListGroup.Item action variant="primary">
                                    Description
                                </ListGroup.Item>
                                <ListGroup.Item action variant="light">
                                    {listCar.descr}
                                </ListGroup.Item>
                            </ListGroup>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
            <div className="row">
                <div className="col-12 mb-4">
                    <div className="card">
                        <div className="card-header">
                            <label htmlFor="" className="h3 text-info">Liste des commentaires</label>
                            <div>
                                <Paginations 
                                    postPerPage={postsPerPage} 
                                    totalPage={comms.length}
                                    paginate={paginate}
                                />
                            </div>
                        </div>
                        
                        <div className="card-body p-3">
                            {
                                currentPost.map((comm, index)=>(
                                    <div className="d-flex cardFooter mb-5" key={index}>
                                        <div className="userProfile">
                                            <div className="profileP">
                                                <img src={admin} alt="" className="img-profile" />
                                            </div>
                                            <div className="_userName float-left">
                                                <h6 className="userName">{comm.user}</h6>
                                                <label className="dateComment">{comm.createdAt}</label>
                                                <p className="contentComment">{comm.comment}</p>
                                            </div>
                                        </div>
                                        <div className="btnComment float-right">
                                            <button className="float-right btn btn-danger btn-sm">Supprimer</button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        
                        <div className="card-footer p-3">
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Commentaire</Form.Label>
                                    <Form.Control onChange={(e)=> setComment(e.target.value)} type="text" placeholder="Entrer votre commentaire" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Commenter
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React, { useEffect, useState } from 'react';

import axios from 'axios'
import { baseUrl } from '../../Service/Client'
import Listcars from '../../components/listCars/Listcars';
import img1 from '../../assets/Fiara/bmw1.jpg';


export default function HomePage() {
    const [listCarss, setListCars] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostPerPage] = useState(6);

    // Get all cars
    useEffect(()=> {
        const fetchdata = async () => {
            await axios.get(baseUrl+'/cars',{
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                }
            })
            .then((res)=>{
              setListCars(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
        }
        fetchdata()
      }, [])

      /**
     * Pour la recherche des cars
     */
    const handleChange = (e) => {
        e.preventDefault();
        setSearchText(e.target.value);
    };

    const dataFilter = listCarss.filter(name => {
        return name.marque.toLowerCase().indexOf(searchText.toLowerCase()) >= 0
    })

    /**
     * Pagination
     */
    const indexOfLastPage = currentPage * postsPerPage;
    const IndexOfFirstPage = indexOfLastPage - postsPerPage;
    const currentPost = dataFilter.slice(IndexOfFirstPage, indexOfLastPage)

    const paginate = (numberPage)=> {
        setCurrentPage(numberPage)
    }

    return (
        <div className="container _homePage">
            <Listcars
             paginate={paginate} 
             postsPerPage={postsPerPage} 
             totalPage={listCarss} 
             img1={img1} 
             currentPost={currentPost}
             searchText={searchText}
             handleChange={handleChange}
             setPostPerPage={setPostPerPage}
             />
        </div>
    )
}

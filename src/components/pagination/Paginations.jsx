import React from 'react'

export default function Paginations({totalPage, paginate, postPerPage}) {
    const numberPage = []

    for(let i = 1; i <= Math.ceil(totalPage/postPerPage);i++){
        numberPage.push(i)
    }
    return (
        <nav>
            <ul className="pagination">
                {
                    numberPage.map(page => (
                        <li key={page} className="page-item">
                            <p onClick={()=> paginate(page)} className="page-link">
                                {page}
                            </p>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

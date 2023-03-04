import React from 'react'
import "./SubHeader.css"
import { AiOutlineMenu } from "react-icons/ai"
import { useLocation } from 'react-router-dom'

function SubHeader() {

  const {pathname} = useLocation()
  if(pathname.includes("admin")){
    return <></>
  }

  return (
    <div className='subh'>
        <ul className="collection">
            <li className="item"><AiOutlineMenu/>Kategory</li>
            <li className="item">News</li>
            <li className="item">Novelties</li>
            <li className="item">Skid</li>
            <li className="item">Books</li>
            <li className="item">Phones</li>
            <li className="item">TV</li>
            <li className="item">Sport</li>
        </ul>
    </div>
  )
}

export default SubHeader
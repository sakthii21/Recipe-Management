import React from 'react'
import {Link, useLoaderData} from 'react-router-dom'
import foodImg from '../assets/masaldosa.jpg'
import { BsFillStopwatchFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


export default function Recipeitems() {
    const allRecipes = useLoaderData()
    let path = window.location.pathname==="/myRecipe" ? true:false
    console.log(allRecipes)
  return (
    <>
    <div className='card-container'>
        {
            allRecipes?.map((item,index)=>{
                return(
                    <div key ={index}className='card'>
                     <img src={`http://localhost:5000/images/${item.coverImage}`} width="190px" height='100px'></img>
                     <div className='card-body'>
                        <div className='title'>{item.title}</div>
                        <div className='icons'> 
                            <div className='timer'><BsFillStopwatchFill />{item.time}</div>
                            {(!path)? <FaRegHeart />:
                            <div className='action'>
                            <Link to={`/editRecipe/${item._id}`} className="editIcon"><FaRegEdit /></Link>
                            <MdDelete className='deleteIcon' />
                            </div>}
                        </div>
                        </div>
                     </div>   
                )
            })
}
        </div>
        </>
  )
}

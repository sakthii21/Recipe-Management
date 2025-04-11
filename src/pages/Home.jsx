import React, { useState } from 'react'
import foodRecipe from '../assets/food4.jpg'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Recipeitems from '../components/Recipeitems'
import AddFoodRecipe from './AddFoodRecipe'
import Modal from '../components/Modal'
import Input from '../components/Input'
import { useNavigate } from 'react-router-dom'
const Home=()=>{

  const navigate = useNavigate()
  const [isOpen,setIsOpen] = useState(false)
  const addRecipe=()=>{
     let token = localStorage.getItem("token")
     if(token)
        navigate("/addRecipe")
     else{
      setIsOpen(true)
     }
  }


  return (
    <>
    
    <section className='home'>
        <div className='left'> 
            <h1>Food Recipe</h1>
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat consectetur, ut doloremque quod eos molestias nobis voluptatibus reprehenderit temporibus numquam enim possimus non sequi. Iste in hic ad nisi ab.</h5>
             <button onClick={addRecipe}>Share your recipe</button>
        </div>
        <div className='right'>
          <img src={foodRecipe} width='320px' height='300px'></img>
        </div>
        </section> 
        <div className='bg'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e7008a" fillOpacity="1" d="M0,160L40,170.7C80,181,160,203,240,192C320,181,400,139,480,117.3C560,96,640,96,720,117.3C800,139,880,181,960,186.7C1040,192,1120,160,1200,149.3C1280,139,1360,149,1400,154.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>

        </div>
{(isOpen) && <Modal onClose={()=>setIsOpen(false)}><Input setIsOpen={()=>setIsOpen(false)}/></Modal>}
        <div className='recipe'>
          <Recipeitems/>
        </div>
       
           </>
  )
}

export default Home;
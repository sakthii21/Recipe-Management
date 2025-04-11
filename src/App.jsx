import React, { Children } from 'react'
import './App.css'
import Home from './pages/Home'
import AddFoodRecipe from './pages/AddFoodRecipe'
import MainNavigation  from './components/MainNavigation'
import {createBrowserRouter,RouterProvider}from "react-router-dom"
import axios from 'axios'
import EditRecipe from './pages/EditRecipe'



// Get all recipes from API
const getAllRecipes=async()=>{
  let allRecipes=[]
  await axios.get('http://localhost:5000/recipe').then(res=>{
    allRecipes=res.data
  })
  return allRecipes
}
const getMyRecipes = async()=>{
  let user = JSON.parse(localStorage.getItem("user"))
  let allRecipes = await getAllRecipes()
  return allRecipes.filter(item=>item.createdBy===user._id)
}

const router=createBrowserRouter([
  {path:"/",element:<MainNavigation/>,children:[
    {path:"/",element:<Home/>,loader:getAllRecipes},
    {path:"/myRecipe",element:<Home/>,loader:getMyRecipes},
    {path:"/favRecipe",element:<Home/>},
    {path:"/addRecipe",element:<AddFoodRecipe/>},
    {path:"/editRecipe/:id",element:<EditRecipe/>}
  ]}
])

export default function App() {
  return (
   <>
   <RouterProvider router={router}></RouterProvider>
   </>
  )
}
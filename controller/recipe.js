
const Recipe = require("../models/recipe")
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
      const filename= Date.now() + '-' + file.filename
      cb(null, filename)
    }
  })
  
  const upload = multer({ storage: storage })


// get all recipes
const getRecipes=async (req, res) =>{
    const recipes = await Recipe.find()
    res.json(recipes)

}
//get recipe by id
const getRecipebyId=async(req, res) =>{
   const recipe = await Recipe.findById(req.params.id)
   res.json(recipe)
}

// adding the recipe
const addrecipe=async(req, res) =>{
  console.log(req.user)
    const {title,ingredients,instructions,time}=req.body

    if(!title || !ingredients || !instructions){
        res.json({message:"required fields cannot be empty"})
    }
  const newRecipe = await Recipe.create({
    title,ingredients,instructions,time,coverImage:req.file.filename,
    createdBy:req.user.id
  })
  return res.json(newRecipe)
}

//update the recipe
const updaterecipe=async (req, res) =>{
    const {title,ingredients,instructions,time}=req.body
    let recipe = await Recipe.findById(req.params.id)
  try{ 
     if(recipe){
      let coverImage=req.file?.filename ? req.file?.filename : recipe.coverImage
        await Recipe.findByIdAndUpdate(req.params.id,{...req.body,coverImage},{new:true})
        res.json({title,ingredients,instructions,time})
    }
}
catch(err){
    return res.status(404).json({message:'error'})
}
}

const deleterecipe=("/",(req, res) =>{
    res.json({message:"hello world"})
})



module.exports={getRecipes, addrecipe, deleterecipe, updaterecipe,getRecipebyId,upload}
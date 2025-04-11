const express = require("express")
const router = express.Router()
const recipecontroller = require("../controller/recipe");
//const upload = require("../middleware/upload");
const upload = require("../middleware/upload"); // Import multer middleware
const auth = require("../middleware/auth");

router.get("/",recipecontroller.getRecipes) //get all the recipes
router.get("/:id",recipecontroller.getRecipebyId) //get the recipe by id
router.post("/",upload.single('file') ,auth,recipecontroller.addrecipe)//add the recipe
router.put("/update/:id",upload.single('file'),recipecontroller.updaterecipe) //update the recipe
router.delete("/delete/:id",recipecontroller.deleterecipe) //delete the recipe


module.exports = router

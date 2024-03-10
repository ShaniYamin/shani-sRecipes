import React, { useEffect, useState} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import IngredientForm from './createRecipeForm/IngredientForm';
import InstructionsForm from './createRecipeForm/InstructionsForm';
import TipsForm from './createRecipeForm/TipsForm';
import TagsForm from './createRecipeForm/TagsForm';
import DifficultyForm from './createRecipeForm/DifficultyForm';


function CreateRecipe() {
    const [formData, setFormData] = useState({
        recipeName: '',
        authorName: sessionStorage.getItem('userName'),
        authorEmail: sessionStorage.getItem('email'),
        prepTime: '',
        cookTime: '',
        totalTime: '',
        servings: '',
        difficulty:'',
        ingredients: {},
        instructions: {},
        tips: {},
        tags: {},
      });
      const [submitted,SetSubmitted] = useState(false);
      const [ingredientsData, setIngredientsData] = useState([
        { quantity: '', unit: '', ingredient: '' },
      ]);
      const [instructionsData, setInstructionsData] = useState([
        { Instruction: ''},
      ]);
      const [tipsData, setTipsData] = useState([
        { tip: ''},
      ]);
      const [selectedTags, setSelectedTags] = useState([])


  const handleChange=(e)=>{
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }


  let navigate = useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault();
    SetSubmitted(!submitted)
  }  

  useEffect(()=>{
    // e.preventDefault();
    setFormData((prevData) => ({
      ...prevData,
      "ingredients": ingredientsData,
      "instructions": instructionsData,
      "tips": tipsData,
      "tags": selectedTags,
    }));
    // console.log("formData-",formData)
    alert("You Create recipe")
    axios.post('http://127.0.0.1:8000/recipes/',formData)
      .then(response => {
        alert("Your Recipe has been saved")
        // navigate("/recipes");
      })
      .catch(error => {
        console.log(error);
      });
  },[submitted]);


  return (
    <div>
      <h1>Create Recipe</h1>
      <Form style={{width:'50%', margin: 'auto'}} 
       onSubmit={handleSubmit}
      >
      <Form.Group className="mb-3" itemID='part1'>
      <div className="row">
        <div style={{width:'31%',margin:'1%'}}>
        <Form.Label>Recipe Name</Form.Label>
        <Form.Control type="text" placeholder="Recipe Name"  id="recipeName"
            name="recipeName"
            value={formData.recipeName}
            onChange={handleChange} />
        </div>
        <div style={{width:'31%',margin:'1%'}}>
        <Form.Label>Author Name</Form.Label>
        <Form.Control type="text" placeholder="Author Name" id="authorName"
            name="authorName"
            value={sessionStorage.getItem('userName')}
            disabled={true} />
        </div> 
        <div style={{width:'31%',margin:'1%'}}>
        <Form.Label>Author Email</Form.Label>
        <Form.Control type="text" id="authorEmail"
            name="authorEmail"
            value={sessionStorage.getItem('email')}
            disabled={true} />
        </div> 
        </div>
      </Form.Group>
      <Form.Group className="mb-3" itemID='part2'>
      <div className="row">
        <div style={{width:'15%',margin:'1%'}}>
          <Form.Label>Prep Time</Form.Label>
          <Form.Control type="number" min='0' step='5' id="prepTime"
            name="prepTime"
            value={formData.prepTime}
            onChange={handleChange} />
        </div>
        <div style={{width:'15%',margin:'1%'}}>
          <Form.Label>Cook Time</Form.Label>
          <Form.Control type="number" min='0' step='5' id="cookTime"
            name="cookTime"
            value={formData.cookTime}
            onChange={handleChange} />
        </div>
        <div style={{width:'15%',margin:'1%'}}>
          <Form.Label>Total Time</Form.Label>
          <Form.Control type="number" min='0' step='5' id="totalTime"
            name="totalTime"
            value={formData.totalTime}
            onChange={handleChange} />
        </div>
        <div style={{width:'15%',margin:'1%'}}>
          <Form.Label>Servings</Form.Label>
          <Form.Control type="number" min='0' id="servings"
            name="servings"
            value={formData.servings}
            onChange={handleChange} />
        </div>
        <div style={{width:'30%',margin:'1%'}}>
          <Form.Label>Difficulty</Form.Label>
         <DifficultyForm onChange={handleChange}/>
        </div>
      </div>
      </Form.Group>

      <Form.Group className="mb-3"  itemID='part3'>
        <Form.Label>Ingredients</Form.Label>
        <IngredientForm setIngredientsData = {setIngredientsData} ingredientsData={ingredientsData}/>
        </Form.Group>
      <Form.Group className="mb-3" itemID='part4'  >
        <Form.Label>Instructions</Form.Label>
        <InstructionsForm setInstructionsData={setInstructionsData} instructionsData={instructionsData} />
        </Form.Group>
      <Form.Group className="mb-3" itemID='part5'>
        <Form.Label>Tips</Form.Label>
        <TipsForm setTipsData={setTipsData} tipsData={tipsData}/>
        </Form.Group>
      <Form.Group className="mb-3" itemID='part6'>
        <Form.Label>Tags</Form.Label>
        <TagsForm selectedTags={selectedTags} setSelectedTags={setSelectedTags}/>
      </Form.Group>

      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default CreateRecipe;
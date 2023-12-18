import React, { useState} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";

function CreateRecipe() {
    const [formData, setFormData] = useState({
        recipeName: '',
        authorName: '',
        category: '',
        prepTime: '',
        cookTime: '',
        totalTime: '',
        servings: '',
        ingredients: '',
        instructions: '',
        tips: '',
        tags: '',
      });
    //   const clearAllField=() =>{
    //     setFormData({
    //         recipeName: '',
    //         authorName: '',
    //         category: '',
    //         prepTime: '',
    //         cookTime: '',
    //         totalTime: '',
    //         servings: '',
    //         ingredients: '',
    //         instructions: '',
    //         tips: '',
    //         tags: ''
    //     })
    //   }

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
    
    axios.post('http://127.0.0.1:8000/recipes/',formData)
      .then(response => {
        alert("Your Recipe has been saved")
        navigate("/recipes");
        // clearAllField()
      })
      .catch(error => {
        console.log(error);
      });
      
  }

  return (
    <div>
      <h1>Create Recipe Page</h1>
      <Form className="border p-5" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="createRecipe">
      <div class="row">
        <div class="col">
        <Form.Label>Recipe Name</Form.Label>
        <Form.Control type="text" placeholder="Recipe Name"  id="recipeName"
            name="recipeName"
            value={formData.recipeName}
            onChange={handleChange} />
        </div>
        <div class="col">
        <Form.Label>Author Name</Form.Label>
        <Form.Control type="text" placeholder="Author Name" id="authorName"
            name="authorName"
            value={formData.authorName}
            onChange={handleChange} />
        </div> <div class="col">
        <Form.Label>Category</Form.Label>
        <Form.Control type="text" placeholder="Category" id="category"
            name="category"
            value={formData.category}
            onChange={handleChange} />
        </div>
        </div>
      </Form.Group>
      <Form.Group className="mb-3" controlId="time">
    <div class="row">
        <div class="col">
            <Form.Label>Prep Time</Form.Label>
            <Form.Control type="number" id="prepTime"
            name="prepTime"
            value={formData.prepTime}
            onChange={handleChange} />
        </div>
        <div class="col">
            <Form.Label>Cook Time</Form.Label>
            <Form.Control type="number" id="cookTime"
            name="cookTime"
            value={formData.cookTime}
            onChange={handleChange} />
        </div>
        <div class="col">
            <Form.Label>Total Time</Form.Label>
            <Form.Control type="number" id="totalTime"
            name="totalTime"
            value={formData.totalTime}
            onChange={handleChange} />
        </div>
        <div class="col">
            <Form.Label>Servings</Form.Label>
            <Form.Control type="number" id="servings"
            name="servings"
            value={formData.servings}
            onChange={handleChange} /></div>
        </div>
      </Form.Group>

      <Form.Group className="mb-3" controlId="ingredients">
        <Form.Label>Ingredients</Form.Label>
        <Form.Control as="textarea" rows={3} id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange} />
        <Form.Label>Instructions</Form.Label>
        <Form.Control as="textarea" rows={4} id="instructions"
            name="instructions"
            value={formData.instructions}
            onChange={handleChange} />
        <Form.Label>Tips</Form.Label>
        <Form.Control as="textarea" rows={2} id="tips"
            name="tips"
            value={formData.tips}
            onChange={handleChange} />
              <Form.Label>Tags</Form.Label>
              <Form.Control type="text" placeholder="tags" id="tags"
            name="tags"
            value={formData.tags}
            onChange={handleChange} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default CreateRecipe;
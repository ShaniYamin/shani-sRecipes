import React, { useState} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import IngredientForm from './createRecipeForm/IngredientForm';
import InstructionsForm from './createRecipeForm/InstructionsForm';
import TipsForm from './createRecipeForm/TipsForm';

function CreateRecipe() {
    const [formData, setFormData] = useState({
        recipeName: '',
        authorName: '',
        category: '',
        prepTime: '',
        cookTime: '',
        totalTime: '',
        servings: '',
        difficulty:'',
        ingredients: '',
        instructions: '',
        tips: '',
        tags: '',
      });
      const [categoryList,setCategoryList]= useState([]);
      const [tagsList, setTagsList]=useState([]);

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
    const difficultyOptions=[
      'Hard','Medium', 'Easy'
    ];

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

  const handleKeyDownCategory=(e)=>{
    if(e.key!=='Enter') return 
    const value= e.target.value
    if(!value.trim())return
    setCategoryList([...categoryList,value])
    e.target.value=''
  }
  const removeCategory=(index)=>{
    setCategoryList(categoryList.filter((el,i)=> i !== index ))
  }

  const handleKeyDownTags=(e)=>{
    if(e.key!=='Enter') return 
    const value= e.target.value
    if(!value.trim())return
    setTagsList([...tagsList,value])
    e.target.value=''
  }
  const removeTags=(index)=>{
    setTagsList(tagsList.filter((el,i)=> i !== index ))
  }
  

  return (
    <div>
      <h1>Create Recipe Page</h1>
      <Form style={{width:'50%', margin: 'auto'}} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="part1">
      <div class="row">
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
            value={formData.authorName}
            onChange={handleChange} />
        </div> 
        <div style={{width:'32%',margin:'1%'}}>
        <Form.Label>Category</Form.Label>
          <div className='category-input-container' >
            {categoryList.map((category,index)=>(
              <div className='category-item' key={index}>
                <span className='text'>{category}</span>
                <span className='close' onClick={()=>removeCategory(index)}>&times;</span>
              </div>
            ))}
            <input onKeyDown={handleKeyDownCategory} style={{padding:'5px'}} ></input>
          </div>
        </div>
        </div>
      </Form.Group>
      <Form.Group className="mb-3" controlId="part2">
      <div class="row">
        <div style={{width:'15%',margin:'1%'}}>
          <Form.Label>Prep Time</Form.Label>
          <Form.Control type="number" id="prepTime"
            name="prepTime"
            value={formData.prepTime}
            onChange={handleChange} />
        </div>
        <div style={{width:'15%',margin:'1%'}}>
          <Form.Label>Cook Time</Form.Label>
          <Form.Control type="number" id="cookTime"
            name="cookTime"
            value={formData.cookTime}
            onChange={handleChange} />
        </div>
        <div style={{width:'15%',margin:'1%'}}>
          <Form.Label>Total Time</Form.Label>
          <Form.Control type="number" id="totalTime"
            name="totalTime"
            value={formData.totalTime}
            onChange={handleChange} />
        </div>
        <div style={{width:'15%',margin:'1%'}}>
          <Form.Label>Servings</Form.Label>
          <Form.Control type="number" id="servings"
            name="servings"
            value={formData.servings}
            onChange={handleChange} />
        </div>
        <div style={{width:'30%',margin:'1%'}}>
          <Form.Label>Difficulty</Form.Label>
          <Form.Control as="select" id="difficulty"
            name="difficulty"
            onChange={handleChange} >
              <option value="" disabled selected>
                Select
              </option>
              {difficultyOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
                ))}
            </Form.Control>
        </div>
      </div>
      </Form.Group>

      <Form.Group className="mb-3" controlId="part3">
        <Form.Label>Ingredients</Form.Label>
        <IngredientForm/>
        </Form.Group>
      <Form.Group className="mb-3" controlId="part4">
        <Form.Label>Instructions</Form.Label>
        <InstructionsForm/>
        </Form.Group>
      <Form.Group className="mb-3" controlId="part5">
        <Form.Label>Tips</Form.Label>
        <TipsForm/>
        </Form.Group>
      <Form.Group className="mb-3" controlId="part6">
        <Form.Label>Tags</Form.Label>
        <div className='tag-input-container'>
            {tagsList.map((tag,index)=>(
              <div className='tag-item' key={index}>
                <span className='text'>{tag}</span>
                <span className='close' onClick={()=>removeTags(index)}>&times;</span>
              </div>
            ))}
            <input onKeyDown={handleKeyDownTags} style={{padding:'5px'}}></input>
          </div>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default CreateRecipe;
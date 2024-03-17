import React from "react";
import Card from "react-bootstrap/Card";
import RecipeCard from './RecipeCard';
import { useNavigate } from 'react-router-dom';

const RecipeTab = ({recipe
//   id,
//   recipe_name,
//   image,
//   author_name,
//   category,
//   prep_time,
//   cook_time,
//   total_time,
//   servings,
//   difficulty,
//   ingredients,
//   instructions,
//   tips,
}) => {
  let navigate = useNavigate()
    const handleClick = (recipe)=>{
      console.log(recipe);
        navigate(`/recipes/${recipe.id}`);
        console.log(`/recipes/${recipe.id}`);
    }

  return (
    <Card className="w-50 h-50" style={{padding: '20px'}} onClick={()=>handleClick(recipe)}> 
       <Card.Img variant="top" src={recipe.image} style={{ width: '250px', height: '200px' }}/>
      <Card.Body>
        <Card.Title>{recipe.recipe_name && `${recipe.recipe_name}`}</Card.Title>
        <Card.Text>{recipe.author_name && `Recipe by ${recipe.author_name}`}</Card.Text>
        <Card.Text>{recipe.category && `Category: ${recipe.category}`}</Card.Text>
        <Card.Text>{recipe.prep_time && `Prep Time: ${recipe.prep_time} minutes`}</Card.Text>
        <Card.Text>{recipe.cook_time && `Cook Time: ${recipe.cook_time} minutes`}</Card.Text>
        <Card.Text>{recipe.total_time && `Total Time: ${recipe.total_time} minutes`}</Card.Text>
        <Card.Text>{recipe.servings && `Servings: ${recipe.servings} people`}</Card.Text>
        <Card.Text>{recipe.difficulty && `Difficulty: ${recipe.difficulty}`}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default RecipeTab;
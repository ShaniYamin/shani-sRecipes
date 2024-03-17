import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import data from'./../data.json';
import { useParams } from 'react-router-dom';


const RecipeCard = ({}) => {
  const { id } = useParams(); 
  const recipe = data[id]; 
  console.log(recipe);

  return (
    <Card  style={{padding: '20px'}}> 
       <Card.Img variant="right" src={recipe.image} style={{ width: '250px', height: '200px' }}/>
      <Card.Body>
      {/* <button
          style={{ float: "right" }}
          type="button"
          className="btn btn-light"
          onClick={deleteCard}
        >
          <span className="bi bi-trash"></span>
        </button> */}
       
        <Card.Title>{recipe.recipe_name && `${recipe.recipe_name}`}</Card.Title>
        <Card.Text>{recipe.author_name && `Recipe by ${recipe.author_name}`}</Card.Text>
        <CardGroup className="g-4">
        <Card.Text>{recipe.category && `Category: ${recipe.category}`}</Card.Text>
        <Card.Text>{recipe.prep_time && `Prep Time: ${recipe.prep_time} minutes`}</Card.Text>
        <Card.Text>{recipe.cook_time && `Cook Time: ${recipe.cook_time} minutes`}</Card.Text>
        <Card.Text>{recipe.total_time && `Total Time: ${recipe.total_time} minutes`}</Card.Text>
        <Card.Text>{recipe.servings && `Servings: ${recipe.servings} people`}</Card.Text>
        <Card.Text>{recipe.difficulty && `Difficulty: ${recipe.difficulty}`}</Card.Text>
        </CardGroup>
        <Card.Text>{recipe.ingredients && `Ingredients:`}</Card.Text>
        <div>
        {recipe.ingredients && (
          <ol style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            {recipe.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        )}
        </div>
        <br />
        <div>
        <Card.Text>{recipe.instructions && `Instructions:`}</Card.Text>
        {recipe.instructions && (
          <ol style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>            
          {recipe.instructions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        )}</div>
        <Card.Text>{recipe.tips && `Tips: ${recipe.tips}`}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default RecipeCard;
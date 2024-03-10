import React from "react";
import Card from "react-bootstrap/Card";

const RecipeCard = ({
  id,
  recipe_name,
  image,
  author_name,
  category,
  prep_time,
  cook_time,
  total_time,
  servings,
  difficulty,
  ingredients,
  instructions,
  tips,
  // deleteCardByID
}) => {
  // const deleteCard=()=>{
  //   deleteCardByID(id)
  // }
  return (
    <Card className="w-50 h-50" style={{padding: '20px'}}> 
       <Card.Img variant="top" src={image} style={{ width: '250px', height: '200px' }}/>
      <Card.Body>
      {/* <button
          style={{ float: "right" }}
          type="button"
          className="btn btn-light"
          onClick={deleteCard}
        >
          <span className="bi bi-trash"></span>
        </button> */}
       
        <Card.Title>{recipe_name && `${recipe_name}`}</Card.Title>
        <Card.Text>{author_name && `Recipe by ${author_name}`}</Card.Text>
        <Card.Text>{category && `Category: ${category}`}</Card.Text>
        <Card.Text>{prep_time && `Prep Time: ${prep_time} minutes`}</Card.Text>
        <Card.Text>{cook_time && `Cook Time: ${cook_time} minutes`}</Card.Text>
        <Card.Text>{total_time && `Total Time: ${total_time} minutes`}</Card.Text>
        <Card.Text>{servings && `Servings: ${servings} people`}</Card.Text>
        <Card.Text>{difficulty && `Difficulty: ${difficulty}`}</Card.Text>
        <Card.Text>{ingredients && `Ingredients:`}</Card.Text>
        {ingredients && (
          <ol>
            {ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        )}
        <br />
        <Card.Text>{instructions && `Instructions:`}</Card.Text>
        {instructions && (
          <ul>
            {instructions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
        <Card.Text>{tips && `Tips: ${tips}`}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default RecipeCard;
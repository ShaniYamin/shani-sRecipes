import React from "react";
import Card from "react-bootstrap/Card";

const RecipeCard = ({
  id,
  recipe_name,
  author_name,
  category,
  prep_time,
  cook_time,
  total_time,
  servings,
  ingredients,
  instructions,
  tips,
  deleteCardByID
}) => {
  const deleteCard=()=>{
    deleteCardByID(id)
  }
  return (
    <Card className="w-25 h-50">
      <Card.Body>
      <button
          style={{ float: "right" }}
          type="button"
          class="btn btn-light"
          onClick={deleteCard}
        >
          <span class="bi bi-trash"></span>
        </button>
        <Card.Title>{recipe_name && `Recipe Name: ${recipe_name}`}</Card.Title>
        <Card.Text>{author_name && `Recipe by ${author_name}`}</Card.Text>
        <Card.Text>{category && `Category: ${category}`}</Card.Text>
        <Card.Text>{prep_time && `Prep Time: ${prep_time} minutes`}</Card.Text>
        <Card.Text>{cook_time && `Cook Time: ${cook_time} minutes`}</Card.Text>
        <Card.Text>{total_time && `Total Time: ${total_time} minutes`}</Card.Text>
        <Card.Text>{servings && `Servings: ${servings} people`}</Card.Text>
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
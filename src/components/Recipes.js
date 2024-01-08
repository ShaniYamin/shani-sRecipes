import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeCard from './RecipeCard';
import { useNavigate } from 'react-router-dom';

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  let navigate = useNavigate()

  const routeCreate=()=>{
    navigate("/recipes/create");
  }
  const deleteCardByID=(id)=>{
    axios.delete(`http://127.0.0.1:8000/recipes/${id}`)
      .then(response => {
        setRecipes(response.data.recipes);
      })
      .catch(error => {
        console.log(error);
      });
  }

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/recipes/')
      .then(response => {
        setRecipes(response.data.recipes);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Recipes Page</h1>
      <button onClick={routeCreate}>
      Create New Recipe
      </button>
      <div className="container">
        <div className="row">
            {recipes.map((recipe,index) => (
                <RecipeCard
                id={recipe.id}
                recipe_name={recipe.recipe_name}
                author_name={recipe.author_name}
                category={recipe.category}
                prep_time={recipe.prep_time}
                cook_time={recipe.cook_time}
                total_time={recipe.total_time}
                servings={recipe.servings}
                ingredients={recipe.ingredients}
                instructions={recipe.instructions}
                tips={recipe.tips}
                deleteCardByID={deleteCardByID}
                />
            ))}
           </div>
      </div> 
    </div>
  );
}

export default Recipes;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeCard from './RecipeCard';

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/recipes/')
      .then(response => {
        console.log(response.data.recipes)
        setRecipes(response.data.recipes);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Recipes Page</h1>
      <div className="container">
        <div className="row">
      {recipes.map((recipe,index) => (
        <RecipeCard
        key={index}
        recipe_name={recipe.recipe_name}
        author_name={recipe.author_name}
        category={recipe.category}
        prep_time={recipe.prep_time}
        cook_time={recipe.cook_time}
        total_time={recipe.total_time}
        servings={recipe.servings}
        ingredients={recipe.ingredients.split("\n")}
        instructions={recipe.instructions.split("\n")}
        tips={recipe.tips}
      />
        ))}
                </div>
      </div>
    </div>
  );
}

export default Recipes;
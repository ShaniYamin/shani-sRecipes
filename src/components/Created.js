import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';

function Created(recipe) {

  return (
    <div>
      <h1>Recipes Page</h1>
      <div className="container">
        <div className="row">
        <RecipeCard
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
        </div>
      </div>
    </div>
  );
}

export default Created;
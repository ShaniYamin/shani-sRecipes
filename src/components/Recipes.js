import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeTab from './RecipeTab';
import data from'./../data.json';
// import { useNavigate } from 'react-router-dom';

function Recipes() {
  const [recipes, setRecipes] = useState(data);
  // let navigate = useNavigate()

  // const routeCreate=()=>{
  //   navigate("/recipes/create");
  // }
  // const deleteCardByID=(id)=>{
  //   axios.delete(`http://127.0.0.1:8000/recipes/${id}`)
  //     .then(response => {
  //       setRecipes(response.data.recipes);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

  // useEffect(() => {
  //   // axios.get('http://127.0.0.1:8000/recipes/')
  //   //   .then(response => {
  //   //     setRecipes(response.data.recipes);
  //   //   })
  //   //   .catch(error => {
  //   //     console.log(error);
  //   //   });
  //   setRecipes(data);
  //   console.log(data);
  // }, []);

  return (
    <div>
      <h1>Recipes Page</h1>
      {recipes.length===0?
      <div>
        <p>There are no recipes yet</p>
        <p>You can SignIn and create one</p>
        </div>:
      <div className="container">
        <div className="row">
            {recipes.map((recipe,index) => (
                <RecipeTab recipe={recipe} />
            ))}
           </div>
      </div> }
    </div>
  );
}

export default Recipes;
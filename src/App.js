import './App.css';
import HomePage from './pages/HomePage';
import Recipes from './components/Recipes';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateRecipe from './pages/CreateRecipe';
import NavBar from './components/NavBar';
import UserProfile from './pages/UserProfile';
import UserRecipes from './components/UserRecipes';
import UserFav from './components/UserFav';

function App() {

  return (
    <div className="App">
      <NavBar/>
 <BrowserRouter>
      <Routes>
      <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="recipes" element={<Recipes />} />
          <Route path="recipes/create" element={<CreateRecipe />} />
          <Route path="user/profile" element={<UserProfile />}/>
          <Route path="user/recipes" element={<UserRecipes />}/>
          <Route path="user/favorite" element={<UserFav />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

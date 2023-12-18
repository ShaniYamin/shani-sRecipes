import './App.css';
import HomePage from './pages/HomePage';
import Recipes from './components/Recipes';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateRecipe from './pages/CreateRecipe';
import NavBar from './components/NavBar';

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
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import HomePage from './components/HomePage';
import Recipes from './components/Recipes';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
 <BrowserRouter>
      <Routes>
      <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="recipes" element={<Recipes />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

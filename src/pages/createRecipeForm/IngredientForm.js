import { useState } from "react";
import IngredientRow from "./IngredientRow";
const IngredientForm = () => {
    const [ingredientsData, setIngredientsData] = useState([
      { quantity: '', unit: '', ingredient: '' },
    ]);
  
    const handleRowChange = (index, fieldName, value) => {
      const updatedGridData = [...ingredientsData];
      updatedGridData[index][fieldName] = value;
      setIngredientsData(updatedGridData);
    };
  
    const handleAddRow = () => {
        setIngredientsData([...ingredientsData, { quantity: '', unit: '', ingredient: '' }]);
    };

    const handleDeleteRow = (index) => {
        const updatedGridData = [...ingredientsData];
        updatedGridData.splice(index, 1);
        setIngredientsData(updatedGridData);
      };
  
    return (
      <div>
        {ingredientsData.map((rowData, index) => (
          <IngredientRow
            key={index}
            index={index}
            rowData={rowData}
            onChange={handleRowChange}
            onDelete={handleDeleteRow}
          />
        ))}
        <button onClick={handleAddRow}>Add Ingredient</button>
      </div>
    );
  };
  
  export default IngredientForm;
import { useState,useEffect } from "react";
import IngredientRow from "./IngredientRow";
import axios from 'axios';

const IngredientForm = ({setIngredientsData,ingredientsData}) => {
    // const [ingredientsData, setIngredientsData] = useState([
    //   { quantity: '', unit: '', ingredient: '' },
    // ]);
    const [ingredientsOptions, setIngredientsOptions] = useState([]);
        // { value: 'suger',label:'Suger'},
        // { value: 'garlic',label:'Garlic'},
        // { value: 'pasta',label:'Pasta'}]);
    const [unitsOptions, setUnitsOptions] = useState([]);
        // { value: 'cup',label:'Cups'},
        // { value: 'grams',label:'Grams'},
        // { value: 'spoon',label:'Spoon'}]);   
  
    const handleRowChange = (index, fieldName, value) => {
      const updatedGridData = [...ingredientsData];
      updatedGridData[index][fieldName] = value;
      setIngredientsData(updatedGridData);
    };
    
    const handleAddRow = (event) => {
      event.stopPropagation();
      setIngredientsData([...ingredientsData, { quantity: '', unit: '', ingredient: '' }]);
    };

    const handleDeleteRow = (index) => {
        const updatedGridData = [...ingredientsData];
        updatedGridData.splice(index, 1);
        setIngredientsData(updatedGridData);
        console.log("update",updatedGridData)
      };
  
      useEffect(() => {
        axios.get('http://127.0.0.1:8000/ingredients/')
          .then(response => {
            setIngredientsOptions(response.data.ingredients);
          })
          .catch(error => {
            console.log(error);
          });
         axios.get('http://127.0.0.1:8000/units/')
          .then(response => {
            setUnitsOptions(response.data.units);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);
    return (
      <div>
        {ingredientsData.map((rowData, index) => (
          <IngredientRow
            key={index}
            index={index}
            rowData={rowData}
            onChange={handleRowChange}
            ingredientsOptions={ingredientsOptions}
            unitsOptions={unitsOptions}
            onDelete={handleDeleteRow}
          />
        ))}
        <button onMouseDown={handleAddRow} style={{fontSize: '14px',padding:'2px'}} >Add Ingredient</button>
      </div>
    );
  };
  
  export default IngredientForm;
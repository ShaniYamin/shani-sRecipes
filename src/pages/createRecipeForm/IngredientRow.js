import { useState } from 'react';
import CreatableSelect from 'react-select/creatable';

const IngredientRow = ({ index, rowData, onChange,ingredientsOptions,unitsOptions,onDelete }) => {
    const [selectedIngredient,setSelectedIngredient]=useState('');
    const [selectedUnit,setSelectedUnit]=useState('');
    const handleInputChange = (event, fieldName) => {
      onChange(index, fieldName, event.target.value);
    };
    const handleIngredientChange=(selected)=>{
        setSelectedIngredient(selected);
    };
    const handleUnitChange=(selected)=>{
        setSelectedUnit(selected);
    };
    const deleteLine=()=>{
        onDelete(index);
    };
  
    return (
      <div className='row'>
        <input 
          style={{width:'18%',margin:'1%'}}
          type="text"
          placeholder="Quantity"
          value={rowData.quantity}
          onChange={(e) => handleInputChange(e, 'quantity')}
        />
        <div 
        onChange={(e) => handleInputChange(e, 'unit')}  
        style={{width:'28%',margin:'1%'}} >
         <CreatableSelect
            placeholder="Unit"
            value={selectedUnit}
            onChange={handleUnitChange}
            options={unitsOptions}
            isOptionSelected={false}
            />
        </div>
        <div 
        onChange={(e) => handleInputChange(e, 'ingredient')}  
        style={{width:'38%',margin:'1%'}} >
         <CreatableSelect
            placeholder="Ingredient"
            value={selectedIngredient}
            onChange={handleIngredientChange}
            options={ingredientsOptions}
            isOptionSelected={false}
            />
        </div>
        <button
        style={{width:'10%'}}
          type="button"
          className="btn btn-light"
          onClick={deleteLine}
        >
          <span className="bi bi-trash"></span>
        </button>
      </div>
    );
  };
  export default IngredientRow;
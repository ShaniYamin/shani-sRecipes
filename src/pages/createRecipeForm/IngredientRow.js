const IngredientRow = ({ index, rowData, onChange,onDelete }) => {
    const handleInputChange = (event, fieldName) => {
      onChange(index, fieldName, event.target.value);
    };
    const deleteLine=()=>{
        onDelete(index);
    };
  
    return (
      <div>
        <input 
          style={{width:'18%',margin:'1%',padding:'5px'}}
          type="text"
          placeholder="Quantity"
          value={rowData.quantity}
          onChange={(e) => handleInputChange(e, 'quantity')}
        />
        <input
        style={{width:'33%',margin:'1%',padding:'5px'}}
          type="text"
          placeholder="Unit"
          value={rowData.unit}
          onChange={(e) => handleInputChange(e, 'unit')}
        />
        <input
          style={{width:'33%',margin:'1%',padding:'5px'}}
          type="text"
          placeholder="Ingredient"
          value={rowData.ingredient}
          onChange={(e) => handleInputChange(e, 'ingredient')}
        />
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
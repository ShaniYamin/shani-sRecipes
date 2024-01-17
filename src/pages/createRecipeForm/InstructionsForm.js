
import React from "react";


const InstructionsForm = ({setInstructionsData,instructionsData}) => {
  const handleRowChange = (event, index) => {
    const updatedGridData = [...instructionsData];
    updatedGridData[index] = event.target.value;
    setInstructionsData(updatedGridData);
  };
  
    const handleAddRow = () => {
        setInstructionsData([...instructionsData, { Instruction: '' }]);
    };

    const deleteLine=(index)=>{
      const updatedGridData = [...instructionsData];
      updatedGridData.splice(index, 1);
      setInstructionsData(updatedGridData);
    };
    
    return (
      <div>
        {instructionsData.map((instruction,index) => (
       <div  className="instruction-row mb-12">
       <input
       style={{width:'88%',margin:'1%',padding:'5px'}}
         type="text"
         placeholder="Instructions"
        //  id={index}
         key={index}
        //  value={instruction.Instruction}
         onChange={(e) => handleRowChange(e, index)}
       />
           <button
        style={{width:'10%'}}
          type="button"
          className="btn btn-light"
          onClick={()=>deleteLine(index)}
        >
          <span className="bi bi-trash"></span>
        </button>
     </div>
        ))}
        <button onMouseDown={handleAddRow} style={{fontSize: '14px',padding:'2px'}}>Add Instruction</button>
      </div>
    );
  };
  
  export default InstructionsForm;
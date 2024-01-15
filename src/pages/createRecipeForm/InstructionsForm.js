
import React from "react";


const InstructionsForm = ({setInstructionsData,instructionsData,deleteInstruction}) => {
  const handleRowChange = (event, index) => {
    const updatedGridData = [...instructionsData];
    updatedGridData[index] = {
      ...updatedGridData[index],
      Instruction: event.target.value,
    };
    console.log("aaaaaaaaaaaaaaaaaaa");
    console.log(updatedGridData)
    setInstructionsData(updatedGridData);
  };
  
    const handleAddRow = () => {
        setInstructionsData([...instructionsData, { Instruction: '' }]);
    };

    const deleteLine=(index)=>{
        // const updatedGridData = [...instructionsData];
        // updatedGridData.splice(index, 1);
        // // const update = updatedGridData.filter(item => item.index !==index )
        // // console.log(updatedGridData);
        // setInstructionsData(updatedGridData);
        //console.log(instructionsData)
        // setInstructionsData((prevInstruction) =>  prevInstruction.filter((prevItem) =>  prevItem !== instruction) )
        // console.log(instruction);
        deleteInstruction(index);
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
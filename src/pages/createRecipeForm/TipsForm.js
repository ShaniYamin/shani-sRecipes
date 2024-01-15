import { useState } from "react";
const TipsForm = () => {
    const [tipsData, setTipsData] = useState([
      { Instruction: ''},
    ]);
    const deleteLine=(index)=>{
        const updatedGridData = [...tipsData];
        updatedGridData.splice(index, 1);
        setTipsData(updatedGridData);
    };
  
    const handleRowChange = (event, index) => {
      const updatedGridData = [...tipsData];
      updatedGridData[index] = event.target.value;
      setTipsData(updatedGridData);
    };
  
    const handleAddRow = () => {
        setTipsData([...tipsData, { tip: '' }]);
    };
    
    return (
      <div>
        {tipsData.map((tip,index) => (
       <div key={index} className="tip-row">
       <input
         style={{width:'88%',margin:'1%',padding:'5px'}}
         type="text"
         placeholder="Write Tip"
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
        <button onMouseDown={handleAddRow} style={{fontSize: '14px',padding:'2px'}}>Add Another Tip</button>
      </div>
    );
  };
  
  export default TipsForm;
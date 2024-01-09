import { Form } from 'react-bootstrap';
const DifficultyForm=({onChange})=>{
    const difficultyOptions=[
        'Hard','Medium', 'Easy'
      ];

    return(
        <Form>
        <Form.Control as="select" id="difficulty" defaultValue="select"
        onChange={onChange} >
            
          <option value="select"  disabled >
            Select
          </option>
          {difficultyOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
            ))}
        </Form.Control>
        </Form>
    )
};
export default DifficultyForm;
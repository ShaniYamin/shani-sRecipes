import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function CreateRecipe() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.post('http://127.0.0.1:8000/createRecipe/')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Recipe Home Page</h1>
      <Form>
      <Form.Group className="mb-3" controlId="createRecipe">
        <Form.Label>Recipe Name</Form.Label>
        <Form.Control type="text" placeholder="Recipe Name" />
        <Form.Label>Author Name</Form.Label>
        <Form.Control type="text" placeholder="Author Name" />
        <Form.Label>Category</Form.Label>
        <Form.Control type="text" placeholder="Category" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="time">
        <Form.Label>Prep Time</Form.Label>
        <Form.Control type="number" />
        <Form.Label>Cook Time</Form.Label>
        <Form.Control type="number" />
        <Form.Label>Total Time</Form.Label>
        <Form.Control type="number" />
        <Form.Label>servings</Form.Label>
        <Form.Control type="number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="ingredients">
      <div class="form-group">
    <label for="ingredients">Ingredients</label>
    <textarea class="form-control" id="ingredients" rows="3"></textarea>
  </div>
  <div class="form-group">
    <label for="instructions">instructions</label>
    <textarea class="form-control" id="instructionsinstructions" rows="3"></textarea>
  </div>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default CreateRecipe;
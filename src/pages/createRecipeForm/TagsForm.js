import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import CreatableSelect from 'react-select/creatable';

const TagsForm = () => {
  const [selectedTags, setSelectedTags] = useState([])
  const [tagsOptions, setTagsOptions] = useState([]);
    // { value: 'tag1',label:'Tag 1'},
    // { value: 'tag2',label:'Tag 2'},
    // { value: 'tag3',label:'Tag 3'}]);

  const handleTagsChange = (selected) => {
    setSelectedTags(selected);
  };


  useEffect(() => {
    axios.get('http://127.0.0.1:8000/tags/')
      .then(response => {
        setTagsOptions(response.data.tags);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <Form>
      <Form.Group controlId="formTags">
         <CreatableSelect
            isMulti
            value={selectedTags}
            onChange={handleTagsChange}
            options={tagsOptions}
            isOptionSelected={false}
            />
      </Form.Group>
    </Form>
  );
};

export default TagsForm;
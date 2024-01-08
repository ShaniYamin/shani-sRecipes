import React from 'react';
import Select from 'react-select';

const TagsSelect = ({ value, onChange, options }) => {
    
  const handleInputChange = (inputValue, { action }) => {
    // Here, you can handle dynamic tag creation (e.g., making an API call)
  };

  return (
    <Select
      isMulti
      value={value}
      onChange={onChange}
      options={options}
      onInputChange={handleInputChange}
      isCreatable
    />
  );
};

export default TagsSelect;
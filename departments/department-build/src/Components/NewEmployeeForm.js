import React, { useState } from 'react';

export const NewEmployeeForm = ({ addNewEmployee }) => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = { name, title }; // create new employee object with form data
    addNewEmployee(newEmployee); // pass new employee data to the addNewEmployee function
    setName(''); // reset form fields
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add Employee</button>
    </form>
  );
};

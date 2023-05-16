import React, { useState } from "react";
import { departmentsApi } from "../DepartmentsApi";

export function EditDepartmentForm(props) {
  const { department, handleUpdate, toggleEditing } = props;
  const [name, setName] = useState(department.name);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedDepartment = { ...department, name };
    await departmentsApi.put(updatedDepartment);
    handleUpdate(updatedDepartment);
  };

  const handleCancel = () => {
    toggleEditing();
  };

  return (
    <div className="department">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <button type="submit">Update</button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
}

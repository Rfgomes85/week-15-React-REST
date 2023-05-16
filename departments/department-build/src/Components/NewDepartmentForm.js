import React, { useState } from "react";

export const NewDepartmentForm = (props) => {
  const [name, setName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (name) {
      props.addNewDepartment(name);
      setName("");
    } else {
      console.log("Invalid Input");
    }
  };

  return (
    <div>
      <h4>Add a new department</h4>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button type="submit">Add Department</button>
      </form>
    </div>
  );
};

import React, { useState } from "react"; // Importing React and useState hook from React library
import { Employee } from "./Employee"; // Importing Employee component from Employee.js file
import { EditDepartmentForm } from "./EditDepartmentForm"; // Importing EditDepartmentForm component from EditDepartmentForm.js file

import { departmentsApi } from "../DepartmentsApi"; // Importing departmentsApi object from DepartmentsApi.js file

export const Department = ({ department, updateDepartment }) => { // Defining a Department component that takes in department and updateDepartment as props
  const [isEditing, setIsEditing] = useState(false); // Initializing a state variable 'isEditing' and its setter function using useState hook

  const toggleIsEditing = () => setIsEditing(!isEditing); // Defining a function 'toggleIsEditing' that toggles the value of 'isEditing' state variable

  const handleUpdate = (updatedDepartment) => { // Defining a function 'handleUpdate' that takes in an updatedDepartment object as a parameter
    setIsEditing(false); // Setting 'isEditing' state variable to false
    updateDepartment(updatedDepartment); // Calling 'updateDepartment' function passed as a prop with 'updatedDepartment' object as a parameter
  };

  const handleDelete = () => { // Defining a function 'handleDelete'
    departmentsApi.delete(department._id) // Calling 'delete' method of 'departmentsApi' object with 'department._id' as a parameter
      .then(() => updateDepartment(null)) // If delete is successful, calling 'updateDepartment' function passed as a prop with null as a parameter
      .catch((error) => console.error(error)); // If there is an error, logging it to console
  };

  return ( // Rendering the Department component
    <div className="department"> {/*A div element with className "department"*/}
       <h3>{department.name}</h3> {/* A heading element with the name of the department passed as a prop */}
      <ul> {/* An unordered list */}
        {department.employees && // If 'department.employees' is truthy
          department.employees.map((employee) => ( // Mapping over each employee object in 'department.employees' array
            <Employee employee={employee} key={employee._id} /> // Rendering Employee component with employee object and its _id as props
          ))}
      </ul>
      
       <div className="department-actions"> {/* A div element with className "department-actions" */}
        <button onClick={toggleIsEditing}>Edit</button> {/*A button element with "Edit" as text and onClick event listener that calls 'toggleIsEditing' function*/}
        
           {department._id} {/*// Setting departmentId prop to the _id of the department passed as a prop */}
          {/*// Setting onDelete prop to 'handleDelete' function */}
        
      </div>
      {isEditing && ( // If 'isEditing' state variable is true, render EditDepartmentForm component
        <EditDepartmentForm
          department={department} // Pass department object as a prop
          handleUpdate={handleUpdate} // Pass 'handleUpdate' function as a prop
        />
      )}
    </div>
  );
};

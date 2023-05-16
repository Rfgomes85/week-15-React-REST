import React, { useState, useEffect } from "react"; // Importing React, useState and useEffect
import { Department } from "./Department"; // Importing the Department component from the Department.js file
import { departmentsApi } from "../DepartmentsApi"; // Importing the departmentsApi object from the DepartmentsApi.js file
// import { DeleteDepartmentButton } from "./DeleteDepartmentButton"; // Importing the DeleteDepartmentButton component from the DeleteDepartmentButton.js file

function DepartmentsList() { // Defining a function component called DepartmentsList
  const [departments, setDepartments] = useState([]); // Initializing a state variable called departments with an empty array
  const [newDepartmentName, setNewDepartmentName] = useState(""); // Initializing a state variable called newDepartmentName with an empty string

  useEffect(() => { // Defining an effect that runs when the component mounts
    fetchDepartments(); // Calling the fetchDepartments function to retrieve all departments from the server
  }, []);

  useEffect(() => { // Defining an effect that runs when departments state variable updates
    //console.log("componentDidUpdate");
  });

  const fetchDepartments = async () => { // Defining a function that retrieves all departments from the server
    const departments = await departmentsApi.get(); // Calling the get method on the departmentsApi object to retrieve all departments
    //console.log("fetchDepartments", departments);
    setDepartments(departments); // Updating the departments state variable with the retrieved departments
  };

  const updateDepartment = async (updatedDepartment) => { // Defining a function that updates a department on the server
    await departmentsApi.put(updatedDepartment); // Calling the put method on the departmentsApi object to update the department
    fetchDepartments(); // Calling the fetchDepartments function to update the departments state variable
  };

  const createDepartment = async () => { // Defining a function that creates a new department on the server
    if (newDepartmentName) { // Checking if newDepartmentName state variable is not an empty string
      const newDepartment = { // Creating a new department object
        name: newDepartmentName,
        employees: [],
      };
      await departmentsApi.post(newDepartment); // Calling the post method on the departmentsApi object to create the new department
      setNewDepartmentName(""); // Resetting the newDepartmentName state variable to an empty string
      fetchDepartments(); // Calling the fetchDepartments function to update the departments state variable
    }
  };

  const deleteDepartment = async (_id) => { // Defining a function that deletes a department on the server
    await departmentsApi.delete(_id); // Calling the delete method on the departmentsApi object to delete the department
   fetchDepartments(); // Calling the fetchDepartments function to update the departments state variable
  console.log("Tester");
  };

 // console.log("render", departments);
  return (
    <div className="department-list"> {/* Rendering a div with the class name "department-list" */}
      <h2>Departments</h2> {/* Rendering a heading with the text "Departments" */}
      <div> {/* Rendering a div */}
        <input
          type="text"
          placeholder="New Department Name"
          value={newDepartmentName}
          onChange={(e) =>
            setNewDepartmentName(e.target.value)
          }
        /> {/* Rendering an input field that allows users to enter a new department name */}
        <button onClick={createDepartment}>Create Department</button> {/* Rendering a button that calls the createDepartment function when clicked */}
      </div>
      

      {departments.map((department) => (    // Render each department in the departments array
  <div key={department._id}>         
    <Department                      // Render the Department component
      department={department}        // Pass the department object as a prop
      updateDepartment={updateDepartment}  // Pass the updateDepartment function as a prop
    />
    {deleteDepartment && (           // Check if the deleteDepartment function is defined
      // // <DeleteDepartmentButton        // Render the DeleteDepartmentButton component
      //   onClick={() => deleteDepartment(department._id)} // Pass the deleteDepartment function as a prop
      // />
      <button onClick= { () => deleteDepartment (department._id) }>Delete</button>
    )}
  </div>
))}
    </div>
  );
}

export default DepartmentsList;

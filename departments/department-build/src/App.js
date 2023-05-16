import React from "react"; // Importing React library
import "./App.css"; // Importing styles from the App.css file
import  DepartmentsList  from "./Components/DepartmentsList"; // Importing the DepartmentsList component from the Components/DepartmentsList.js file

function App() { // Defining a function component called App
  return (
    <div className="App"> {/* Rendering a div with the class name "App" */}
      <DepartmentsList /> {/* Rendering the DepartmentsList component */}
    </div>
  );
}

export default App; // Exporting the App component as a default export

import React from "react";
import {NewDepartmentForm} from './NewDepartmentForm.js';

export const Employee = (props) => {
    const { employee, updateEmployee} = props;

    const deleteDepartment = (departmentId) => {
        const updatedEmployee = {
            ...employee,
            departments: employee.departments.filter((x) => x._id !== departmentId )
        };
        updateEmployee(updatedEmployee);
    }

    const addNewDepartment = (department) =>  updateEmployee({...employee, departments:[...employee,departments, department]});

    const departments= () => (
        <ul>
            {employee.departments.map((department, index) => (
                <li key={index}>
                    <button OnClick={(e) => deleteDepartment(department._id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
    return (
        <div>
            <h1>{employee.name}</h1>
            {
                departments({departments, employeeId : employee_id, deleteDepartment})
            }
            <NewDepartmentForm addNewDepartment={addNewDepartment}/>
        </div>
    );
};
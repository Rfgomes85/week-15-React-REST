import React from "react";
import {Employee} from './Employee';
import { employeesApi } from "../EmployeeApi";

export class EmployeesList extends React.Component {
    state = {
        employees: []
    };

    componentDidMount() {
        this.fetchEmployees();
};
        fetchEmployees = async () => {
            const employees = await employeesApi.get();
            this.setState({ employees });
    };

    updateEmployee = async (updatedEmployee) => {
        await employeesApi.put(updatedEmployee);
        this.fetchEmployees();
    };
    render() {
        return(
            <div className="employee-list">
            {this.state.employees.map((employee) => (
                <Employee
                employee={employee}
                key={employee._id}
                updatedEmployee={this.updatedEmployee}
                />
            ))}
            </div>
        )
    }
}
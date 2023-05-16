import React from "react";
const EMPLOYEES_ENDPOINT = 'https://643de9176c30feced81c0d00.mockapi.io/employee/:endpoint';

class EmployeesApi {
    get = async() => {
        try {
        const resp = await fetch(EMPLOYEES_ENDPOINT);
        const data = await resp.json();
        return data;
    } catch(e) {
        console.log('Oops, look like fetchEmployees had an issue.', e);
    }
}
put = async(employee) => {
    try {
        const resp = await fetch(`${EmployeesApi}/ ${employee._id}`, {
            method: 'PUT',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(employee)
        });
        return await resp.json();
    } catch(e) {
        console.log('Oops, look like updating employees had an issue.', e);
    }
   }
}

export const employeesApi = new EmployeesApi();
const DEPARTMENTS_ENDPOINT = 'https://645fc906fe8d6fb29e262195.mockapi.io/departments';

class DepartmentsApi {
  get = async () => { // define an asynchronous function called 'get' which will make a GET request to the departments endpoint
    try {
      const resp = await fetch(DEPARTMENTS_ENDPOINT); // make a GET request to the departments endpoint and store the response in a variable called 'resp'
      const data = await resp.json(); // extract the JSON data from the response and store it in a variable called 'data'
      return data; // return the JSON data
    } catch (e) { // if an error occurs, catch the error and log a message to the console
      console.log("Oops, looks like fetching departments had an issue.", e);
    }
  };

  put = async (department) => { // define an asynchronous function called 'put' which will make a PUT request to update a department
    try {
      const resp = await fetch(`${DEPARTMENTS_ENDPOINT}/${department._id}`, { // make a PUT request to update a specific department and store the response in a variable called 'resp'
        method: "PUT", // specify that we want to make a PUT request
        headers: { // set the headers for the request
          "Content-Type": "application/json", // specify that we are sending JSON data
        },
        body: JSON.stringify(department), // convert the department object to JSON format and send it as the request body
      });
      return await resp.json(); // extract the JSON data from the response and return it
    } catch (e) { // if an error occurs, catch the error and log a message to the console
      console.log("Oops, looks like updating departments had an issue.", e);
    }
  };

  post = async (department) => { // define an asynchronous function called 'post' which will make a POST request to create a new department
    try {
      const resp = await fetch(`${DEPARTMENTS_ENDPOINT}`, { // make a POST request to create a new department and store the response in a variable called 'resp'
        method: "POST", // specify that we want to make a POST request
        headers: { // set the headers for the request
          "Content-Type": "application/json", // specify that we are sending JSON data
        },
        body: JSON.stringify(department), // convert the department object to JSON format and send it as the request body
      });
      return await resp.json(); // extract the JSON data from the response and return it
    } catch (e) { // if an error occurs, catch the error and log a message to the console
      console.log("Oops, looks like creating departments had an issue.", e);
    }
  };


  // Define a new asynchronous function called 'delete' which takes in the departmentId parameter.
delete = async (_id) => { 
  try {
    // Attempt to send a DELETE request to the 'departments' endpoint with the specified departmentId.
    const resp = await fetch(`${DEPARTMENTS_ENDPOINT}/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    // If the request is successful, parse the response as JSON and return the resulting object.
    return await resp.json();
  } catch (e) {
    // If there is an error with the request, log a message to the console indicating the issue.
    console.log("Oops, looks like deleting departments had an issue.", e);
  }
};
}
// Export a new instance of the DepartmentsApi class with the name 'departmentsApi'.
export const departmentsApi = new DepartmentsApi();

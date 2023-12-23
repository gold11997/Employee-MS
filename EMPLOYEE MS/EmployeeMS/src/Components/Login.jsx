// Import necessary modules and components from React and external libraries
import React, { useState } from "react";
import "./style.css"; // Import the styles for the component
import axios from "axios"; // Import Axios for making HTTP requests
import { useNavigate } from "react-router-dom"; // Import useNavigate for programmatic navigation

// Define the functional component named Login
const Login = () => {
  // Use the useState hook to manage state variables
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null); // State variable to handle login errors
  const navigate = useNavigate(); // Hook for programmatic navigation
  axios.defaults.withCredentials = true; // Configure Axios to send credentials with requests

  // Define the function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    // Make a POST request to the authentication endpoint
    axios
      .post("http://localhost:3000/auth/adminlogin", values)
      .then((result) => {
        // Check the login status in the response data
        if (result.data.loginStatus) {
          navigate("/dashboard"); // Navigate to the dashboard on successful login
        } else {
          setError(result.data.Error); // Set the error state if login fails
        }
      })
      .catch((err) => console.log(err)); // Log any errors that occur during the request
  };

  // Render the component's JSX structure
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
      <div className="p-3 rounded w-25 border loginForm">
        <div className="text-warning">
          {error && error} {/* Display error message if there is an error */}
        </div>
        <h2>Login Page</h2>
        {/* Form element with input fields and event handlers */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email:</strong>
            </label>
            {/* Email input field with event handler to update state */}
            <input
              type="email"
              name="email"
              autoComplete="off"
              placeholder="Enter Email"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password:</strong>
            </label>
            {/* Password input field with event handler to update state */}
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
              className="form-control rounded-0"
            />
          </div>
          {/* Submit button to trigger form submission */}
          <button className="btn btn-success w-100 rounded-0 mb-2">
            Log in
          </button>
          <div className="mb-1">
            {/* Checkbox for terms and conditions */}
            <input type="checkbox" name="tick" id="tick" className="me-2" />
            <label htmlFor="password">
              <strong>Agree with terms & conditions</strong>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

// Export the Login component as the default export of the module
export default Login;

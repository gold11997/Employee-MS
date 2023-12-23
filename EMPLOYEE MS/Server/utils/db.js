// Import the MySQL library
import mysql from 'mysql';

// Create a MySQL connection configuration
const connectionConfig = {
  host: "localhost",      // The host where your MySQL server is running
  user: "root",           // MySQL username
  password: "",           // MySQL password (empty in this example)
  database: "employeems"  // The name of the MySQL database you want to connect to
};

// Create a MySQL connection using the configuration
const connection = mysql.createConnection(connectionConfig);

// Connect to the MySQL database
connection.connect(function(err) {
  if (err) {
    // Handle connection error
    console.error("Error connecting to the database:", err.message);
  } else {
    // Connection successful
    console.log("Connected to the database");
  }
});

// Export the MySQL connection for use in other modules
export default connection;

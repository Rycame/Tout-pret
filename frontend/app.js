const express = require('express');
const app = express();
const port = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define a route for the home page
app.get('/', (req, res) => {
  res.render('index');
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

// Assume this code is in your frontend JavaScript file
const fetchData1 = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/data');
    const data = await response.json();
    console.log(data);
    // Now you can use the data in your frontend
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData1();

// Assume this code is in your frontend JavaScript file
const fetchData2 = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/data');
    const data = await response.json();
    console.log(data);
    // Now you can use the data in your frontend
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData2();
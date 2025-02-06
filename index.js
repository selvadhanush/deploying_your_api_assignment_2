const { error } = require('console');
const express = require('express');
const { resolve } = require('path');
require('dotenv').config();


const app = express();
const port = 3535;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
  if (process.env.IS_ADMIN === 'true') {
    res.send({ message: "Welcome, Admin!", data: ["Admin Data 1", "Admin Data 2"] });
  } else {
    res.send({ message: "Welcome, User!", data: ["User Data 1", "User Data 2"] });
  }
});

app.listen(port, () => {
  try{
    console.log(`Example app listening at http://localhost:${port}`);
  }
  catch{
    console.log(error)
  }
 
});

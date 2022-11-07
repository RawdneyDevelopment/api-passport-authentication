const dotenv = require('dotenv').config('.env');
const express = require('express');
const app = express();

/* Routes*/
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

const PORT = process.env.PORT 
app.listen(PORT, console.log(`Server started on ${PORT}`));

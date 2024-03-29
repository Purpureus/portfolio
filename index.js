const express = require('express');
const app = express();

const path = require('path');


app.use(express.static(path.join(__dirname, 'client')));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => { console.log(`Server started on port ${PORT}`) });
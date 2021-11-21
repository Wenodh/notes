const express = require('express');
require('dotenv').config();
const app = express();

app.get('/', (req, res) => {
    res.send('Express server Running');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

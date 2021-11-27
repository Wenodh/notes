const express = require('express');
const connectDb = require('./config/db');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();
const app = express();

connectDb();
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Express server Running');
});
app.get('/api/notes', (req, res) => {
    res.send('notes');
});
app.use('/api/users', userRoutes);
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

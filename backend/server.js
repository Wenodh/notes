const express = require('express');
const connectDb = require('./config/db');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');
const noteRoutes = require('./routes/noteRoutes.js');
const userRoutes = require('./routes/userRoutes');
const path = require('path');
require('dotenv').config();
const app = express();
connectDb();

app.use(express.json());

// _dirname = path.resolve();
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '/frontend/build')));

//     app.get('*', (req, res) =>
//         res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
//     );
// } else {
//     app.get('/', (req, res) => {
//         res.send('Express server Running');
//     });
// }
app.use('/api/notes', noteRoutes);
app.use('/api/users', userRoutes);
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

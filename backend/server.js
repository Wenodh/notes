const express = require('express');
const connectDb = require('./config/db');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();
const app = express();
connectDb();

app.use(express.json());
_dirname = path.resolve();
if (process.env.NODE_ENV === 'production') {
    app.use();
} else {
    app.get('/', (req, res) => {
        res.send('Express server Running');
    });
}
app.get('/api/notes', (req, res) => {
    res.send('notes');
});
app.use('/api/users', userRoutes);
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

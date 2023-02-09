const express = require('express');
const cors = require('cors');

const userRouter = require('./routes/userRouter');

const app = express();

app.use(cors(['http://localhost:4200']));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/v1/users', userRouter);

app.get('/', (_, res) => res.sendStatus(200));

// Error handling
app.all('*', (req, _, next) => next(new Error(`${req.originalUrl} not found`)));

app.use((err, _req, res, _next) => {
	console.log(err);
	res.status(500).json({ status: 'error', message: err.message || 'Something went wrong!' });
});

module.exports = app;

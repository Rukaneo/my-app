require('dotenv').config({ path: './config.env' });
const mongoose = require('mongoose');
const app = require('./app');

const port = process.env.PORT || 3000;

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017').then(() => console.log('Connected to database...'));

app.listen(port, () => console.log(`Listening on port ${port}...`));

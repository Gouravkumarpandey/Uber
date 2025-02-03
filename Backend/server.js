require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');

const port = process.env.PORT || 3000;
const dbConnect = process.env.DB_CONNECT;

if (!dbConnect) {
    console.error('DB_CONNECT is not defined in .env file');
    process.exit(1);
}

if (!port) {
    console.error('PORT is not defined in .env file');
    process.exit(1);
}

console.log(`DB_CONNECT: ${dbConnect}`);
console.log(`PORT: ${port}`);

function connectToDb() {
    mongoose.connect(dbConnect, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('Connected to DB');
        })
        .catch(err => {
            console.error('Failed to connect to DB', err);
            process.exit(1); // Exit the process with failure
        });
}

connectToDb();

app.listen(port, (err) => {
    if (err) {
        console.error('Failed to start server', err);
        process.exit(1); // Exit the process with failure
    }
    console.log(`Server is running on port ${port}`);
});
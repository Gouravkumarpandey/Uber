const mongoose = require('mongoose');

function connectToDb() {
    mongoose.connect(process.env.DB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Connected to DB');
    }).catch((err) => {
        console.error('Database connection error:', err); // Log database connection errors
    });
}

module.exports = connectToDb;

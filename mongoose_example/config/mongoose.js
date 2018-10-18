const mongoose = require('mongoose');
const config = require('./config');

mongoose.Promise = global.Promise;

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

mongoose.connect(`${config.db_uri}`, { useNewUrlParser: true })
    .then(() => {
        console.log(`Connected to db => ${config.db_uri}`);
    })
    .catch(err => {
        throw new Error(`Error connecting to db => ${config.db_uri}`);
    });

module.exports = mongoose;
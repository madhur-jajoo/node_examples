const router = require('express').Router();
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');
const rfs = require('rotating-file-stream');
const config = require('./config');

const logDirectory = path.join(__dirname, '../logs');
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

/*----------------------------------------- */
function pad(num) {
    return (num > 9 ? "" : "0") + num;
}

function generator(time) {
    let year = time.getFullYear();
    let month = pad(time.getMonth() + 1);
    let day = pad(time.getDate());

    return year + "/" + month + "/" + day + "-file.log";
}
/*--------------------------------------------*/

const logStream = rfs(generator(new Date()), {
    interval: '1d',
    compress: 'gzip',
    path: logDirectory
});

if (config.NODE_ENV === 'development' || config.NODE_ENV === 'test') {
    console.log('asd');
    router.use(morgan('common',{
        immediate: true
    }));
} else {
    router.use(morgan('dev', {
        skip: function (req, res) { return res.statusCode < 400 }
    }));

    router.use(morgan('common', {
        stream: logStream,
        skip: function (req, res) { return res.statusCode >= 400 }
    }))
}

module.exports = router;
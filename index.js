var express = require('express');
var app = express();

var argv = require('minimist')(process.argv.slice(2), {
    'alias': {
        'port': 'p',
        'root': 'r'
    },
    'default': {
        'port': 8080,
        'root': '/var/www'
    }
});

app.use(express.static(argv.root));

app.listen(argv.port);

console.log("Serving \""+argv.root+"\" on port "+argv.port);


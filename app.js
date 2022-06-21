const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

const ClienteRuta = require('./route/ClienteRuta');
app.use('/', ClienteRuta);

// API
// githu.com/fotogenerado.jpg
const GitHubRuta = require('./route/GitHubRuta');
app.use('/github', GitHubRuta);

app.listen(3000, () => {
    console.log('listening on port 3000');
});
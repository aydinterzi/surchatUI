const express = require('express');
const path = require('path');
<<<<<<< HEAD

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/surchat'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/surchat/'}),
);

// Start the app by listening on the default Heroku port
=======
const app = express();
app.use(express.static(__dirname + '/dist/<app-name>'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/<app-name>/index.html'));});
>>>>>>> 1a26b1869d14de5a3c1bc3292ebb07920949ce9c
app.listen(process.env.PORT || 8080);

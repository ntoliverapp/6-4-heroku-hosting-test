const express = require('express');
const path = require('path'); //creates a path to find the root

const app = express();

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "../index.html"));
});
const port = process.env.PORT || 4567

app.listen(port, () => console.log(`${port} on`));
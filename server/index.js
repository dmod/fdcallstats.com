const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 5000;

const app = express();

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Answer API requests.
app.get('/api/v1/ping', function (req, res) {
    let obj = 
    [
        {"id": "5", "incident_num": "2"}, 
        {"id": "2", "incident_num": "563"}, 
    ];
    res.json(obj);
});

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, function () {
console.error(`Node cluster worker ${process.pid}: listening on port ${PORT}`);
});
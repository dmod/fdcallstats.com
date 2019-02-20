const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;

const DATABASE_URL = process.env.DATABASE_URL

const app = express();

var callSchema = new mongoose.Schema({
    id: String,
    address: String
});

var Call = mongoose.model('Call', callSchema);

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use(express.json());

app.get('/api/v1/ping', function (req, res) {
    res.json({ "response": "coming back." });
});

app.get('/api/v1/all_calls', async (req, res) => {
    mongoose.connect(DATABASE_URL, { useNewUrlParser: true });
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () { });
    Call.find().lean().exec(function (err, x) {
        return res.json(x);
    })
})

app.post('/api/v1/add_call', async (req, res) => {
    mongoose.connect(DATABASE_URL, { useNewUrlParser: true });
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () { });

    var userCall = req.body;

    var NewCall = new Call({ id: userCall.id, address: userCall.address });

    NewCall.save(function (err, x) {
        if (err) return console.error(err);
    });
    res.status(200).json({ status: "ok" })
})

app.listen(PORT, function () {
    console.info(`PID ${process.pid}: listening on port ${PORT} DB: ${DATABASE_URL}`);
});
const express = require('express');
const path = require('path');
const { Pool } = require('pg');

const DATABASE_URL = "postgres://hxnyorqtfdpecn:99ae5c1712d26534c1d1e790369a2e69c2800c3c03f259dc8b25b4f02bbbcd6e@ec2-50-16-196-238.compute-1.amazonaws.com:5432/dcchrigblnadu1";
const PORT = process.env.PORT || 5000;

const pool = new Pool({
    connectionString: DATABASE_URL,
    ssl: true
})

const app = express();

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/api/v1/ping', function (req, res) {
    res.json({ "response": "coming back." });
});

app.get('/api/v1/db_q', async (req, api_response) => {
    pool.query('SELECT * FROM public.calls', (err, db_response) => {
        if (err) {
            return console.error('Error executing query', err.stack)
        }
        api_response.json(db_response.rows);
    })
})

app.listen(PORT, function () {
    console.info(`PID ${process.pid}: listening on port ${PORT} DB: ${DATABASE_URL}`);
});
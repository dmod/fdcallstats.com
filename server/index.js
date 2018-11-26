const express = require('express');
const path = require('path');
const { Pool } = require('pg');

const { DATABASE_URL } = process.env;

const pool = new Pool({
    connectionString: DATABASE_URL,
    ssl: true
})

const PORT = process.env.PORT || 5000;

const app = express();

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Answer API requests.
app.get('/api/v1/ping', function (req, res) {
    res.json({ "response": "coming back." });
});

// Answer API requests.
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
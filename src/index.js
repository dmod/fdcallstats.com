import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

console.log("Test prior to PG");

const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();

client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});

const element = (
    <div>
    <h1>Hello, world!</h1>
    </div>
);

ReactDOM.render(element, document.getElementById('root'));

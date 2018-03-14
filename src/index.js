import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

console.log("index.js running...");

/* Commenting out while getting PG to work
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
*/

const app = {
  title: 'Random word'
}

const randomCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q'];
const maxNumOfLetters = 10;

const makeASillyRandomWord = () => {
  const randomLength = Math.floor(Math.random() * maxNumOfLetters) + 1;

  let randomWord = "";
  for (let index = 0; index < randomLength; index++) {
    const randomIndex = Math.floor(Math.random() * randomCharacters.length);
    randomWord += randomCharacters[randomIndex];
  }
  return randomWord;
};

const render = () => {
  const template = (
      <div id="content">
          <h1>{app.title}</h1>
          <h3>{makeASillyRandomWord()}</h3>
          <button onClick={render}>Do it again...</button>
      </div>
  );
  ReactDOM.render(template, document.getElementById('root'));
};

render();

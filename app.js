const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from their respective folders
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));


const mysql = require('mysql');

const dbConfig = {
  host: 'HOST_NAME_HERE'
  user: 'USER_NAME_HERE',
  password: 'PASSWORD_HERE',
  database: 'DB_NAME_HERE',
  port: '3306'
};

const connection = mysql.createConnection(dbConfig);

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    throw err;
  }
  console.log('Connected to MySQL database');
});

// Function to insert email into the database
const insertEmail = (email) => {
  const query = `INSERT INTO emails (email) VALUES ('${email}')`;

  connection.query(query, (err, result) => {
    if (err) throw err;
    console.log('Email inserted successfully:', email);
  });
};

// Close the MySQL connection on application exit
process.on('exit', () => {
  connection.end();
});

// Define routes for your individual HTML pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });

app.get('/myyouthspan.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'myyouthspan.html'));
});

app.get('/about.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/careers.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'careers.html'));
});

app.get('/news.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'news.html'));
});

app.get('/contact.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://0.0.0.0:${port}`);
});

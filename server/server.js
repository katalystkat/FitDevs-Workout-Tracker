const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();
const apiRouter = require('./routes/api');

// const apiRouter = require('./routes/api');

const PORT = 3000;

/**
 * handle parsing request body
 */
app.use(cors({credentials: true, origin: 'http://localhost:8080'}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 
 /**
  * handle requests for static files
  */
app.use(express.static(path.resolve(__dirname, '../client')));
app.get('/dashboard', (req, res) => {
  res.sendFile('/Users/katalystkat/Documents/codesmith/FitDevs-Workout-Tracker/client/dashboard.html');
})
app.use('/api', apiRouter);

// app.get('/api/signin', (req, res)=> {
//     res.status(200).send('Sign In Page');
// })

// app.get('/api/communityprogress', (req, res)=> {
//     res.status(200).send('Community Progress Page');
// })
/**
 * start server
 */
 
app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));


app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
  });
  
  module.exports = app;
const path = require('path');
const express = require('express');

const app = express();
const apiRouter = require('./routes/api');

// const apiRouter = require('./routes/api');

const PORT = 3000;

/**
 * handle parsing request body
 */
 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));
 
 /**
  * handle requests for static files
  */
app.use(express.static(path.resolve(__dirname, '../client')));
app.use('/api', apiRouter);

app.get('/api/signin', (req, res)=> {
    res.status(200).send('Sign In Page');
})

app.get('/api/communityprogress', (req, res)=> {
    res.status(200).send('Community Progress Page');
})
/**
 * start server
 */
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
  });
  
  module.exports = app;
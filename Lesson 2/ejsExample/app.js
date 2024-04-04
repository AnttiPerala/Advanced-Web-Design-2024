const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

//define a route
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Isnt node JS amazing?!',
        message: 'Hello there!'
    });
});

//start the server
app.listen(port, ()=>{
    console.log('Our example app is now listening at http://localhost:' + port);
})
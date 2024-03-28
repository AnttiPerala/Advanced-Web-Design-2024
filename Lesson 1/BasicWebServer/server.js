const http = require('http'); //imports the built-in http module and assigns it to a constant variable named http

const hostname = '127.0.0.1';

const port = 3000;

const server = http.createServer((req, res) =>{
    const date = new Date(); //get the current date and time
    const currentTime = date.toLocaleTimeString();

    res.statusCode = 200; //a specific number indicating that everything went ok

    res.setHeader('Content-Type', 'text/html'); //lets browser know that we are about to send it html

    res.end(`<html><body><h1>Current time is: ${currentTime}</h1></body></html>`);
})

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
})
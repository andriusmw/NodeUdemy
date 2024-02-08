const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req,res)=>{
    console.log(req);

    res.end('Welcome to Node!');
});

server.listen(port, hostname, () => {
    console.log(`server running at ${hostname}:${port}`)
});
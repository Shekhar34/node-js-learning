const http=require('http');
const fs=require('fs');

contentFile=fs.readFileSync('index.html');

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'});
    res.end(contentFile);
})

server.listen(80,'127.0.0.1',()=>{
    console.log('listen on port 80')
})
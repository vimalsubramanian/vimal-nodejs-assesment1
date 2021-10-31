var http = require('http');

http.createServer(function(req, res){
res.writeHead(200,{'content-type':'text/plain'});
res.end('I am vimal. This is my First node JS web project');
}).listen(9001);

console.log('Visit web browser');
const http=require('http');
const server=http.createServer((req,res)=>{
  console.log(req.url,req.headers,req.method);
 // process.exit();
 if(req.url==='/home')
 {
 res.setHeader('Content-type','text/html');
 res.write(`<html>`)
 res.write(`<head><title>My app</title></head`)
 res.write(`<body><h1>Welcome Home</h1></body>`)
 res.write(`</html>`)
 res.end();
 }
 else if(req.url==='/about')
 {
    res.setHeader('Content-type','text/html');
 res.write(`<html>`)
 res.write(`<head><title>My app</title></head`)
 res.write(`<body><h1>Welcome About Us Page</h1></body>`)
 res.write(`</html>`)
 res.end();
 }
 else if(req.url==='/node')
 {
 res.setHeader('Content-type','text/html');
 res.write(`<html>`)
 res.write(`<head><title>My app</title></head`)
 res.write(`<body><h1>Welcome to Node js Project</h1></body>`)
 res.write(`</html>`)
 res.end();
 }
 else
 {
res.setHeader('Content-type','text/html');
 res.write(`<html>`)
 res.write(`<head><title>My app</title></head`)
 res.write(`<body><h1>Blank page</h1></body>`)
 res.write(`</html>`)
 res.end();
 }

})

server.listen(4000);
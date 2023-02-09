const http=require('http');
const fs=require('fs');
const server = http.createServer((req,res)=>{
    const url=req.url;
   const  method=req.method;
   if(url==="/")
   {
    fs.readFile('newmessage.txt',(err,data)=>{
        if(err)
        {
            console.log(err);
        }
    res.setHeader('Content-Type','text/html');
    res.write(`</html>`);
    res.write(`<head><title>Message</title></head>`)
    res.write(`<body>${data}</body>`)
    res.write(`<body><form action="/message" method="POST"><input type="text" name="message">
              <input type="submit" value="Send"></form></body>`)
    return res.end();
    })
    
   }
   else if(url==='/message' && method=="POST")
    {
        const body=[];
        req.on('data',(chunk)=>{
            body.push(chunk);
        })
        return req.on('end',(err)=>{
            const parsedbody=Buffer.concat(body).toString();
            const message=parsedbody.split('=')[1];
            fs.writeFile('newmessage.txt',message,err=>{
                //console.log(err);
                res.statusCode=302;
                res.setHeader('Location','/')
                return res.end();
            })
        })
    }
    else{
        res.setHeader('Content-Type','text/html');
        res.write(`</html>`);
        res.write(`<head><title>Message</title></head>`)
        res.write(`<body><h1>Welcome to Node <h1></body>`)
        return res.end();
    }
})

server.listen(4000);
var http=require("http");
http.creatServer(function(request,response)
{
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("test nodejs");
    respons.end();
}).listen(8080);
console.log("nodejs is start listen 8080 port!");
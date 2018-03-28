var http=require('http');
var fs=require('fs');
http.createServer(
    function(request,response){
          var readerStream=fs.createReadStream(process.argv[3]);
          console.log(readerStream);
          readerStream.setEncoding('UTF8');
          var result="";
          response.on('data',((data)=>
          {
          result+=data;
          }));
        //readerStream.on('end',(data)=>response.pipe(data));
        response.end(data);
}).listen(process.argv[2]);
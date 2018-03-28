var http=require('http');
var resultString="";
http.get(process.argv[2],function(response){
 response.setEncoding('utf-8');
 response.on('data',data=>{
//   for(let i=0;i<data.length;i++){
   
//   } 
resultString+=data;
 });
 let count=0;
 response.on('end',()=>{
 for(var i=0;i<resultString.length;i++){
  count++;
 }
 console.log(count);
 console.log(resultString);
 });
});
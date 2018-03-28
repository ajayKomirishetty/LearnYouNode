
var fs=require('fs');
function read(directoryName,extension,callback)
{
    fs.readdir(directoryName,function(err,data){
        if(err) return  callback(err,data);
        var result=[];
        for(let i=0;i<data.length;i++){
            if(data[i].endsWith('.'+extension))
            result.push(data[i]);
        }
  
        return callback(err,result);
    });
//  fs.readdir(directoryName,function(err,data){
//  if(err) console.log(err.message);
//   var result="";
//   for(let i=0;i<data.length;i++){
//     if(data[i].endsWith("."+extension))
//      result+=data[i];
//       return callback(err,result);
// }

// });
 }
module.exports=read;
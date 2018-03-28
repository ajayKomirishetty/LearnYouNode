var module1=require('./module1.js');
var result=module1(process.argv[2],process.argv[3],print);
//console.log(result);
function print(err,result){
if(err) console.log(err);
else result.forEach(function(line){console.log(result)}) 
}

var fs=require('fs');
fs.readFile(process.argv[2],function(err,data){
if(err) console.log(err.message);
let count=0;
for(let i=0;i<data.length;i++){
    if(data.toString()[i]==='\n')
    count++;
}
console.log(count);
});
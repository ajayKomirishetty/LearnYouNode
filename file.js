var fs=require('fs');
var data = fs.readFileSync(process.argv[2]).toString();

let count=0;
for(let i=0;i<data.length;i++)
{
 if(data[i]==='\n') 
    count++;
}
console.log(count);
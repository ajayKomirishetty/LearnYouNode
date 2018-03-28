var fs=require('fs');
fs.readdir(process.argv[2],function(err,list){
    if(err) console.error(err.toString());

for(let i=0;i<list.length;i++){
    if(list[i].endsWith("."+process.argv[3]))
    console.log(list[i]);
}
});

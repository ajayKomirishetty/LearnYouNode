var http=require('http');

// var async=require('async');
// var requests=[
//     {url:process.argv[2]},
//      {url:process.argv[3]},
//       {url:process.argv[4]},
// ];
// async.map(requests,function(url,callback){
// http.get(url,function(response){
// response.on('data',data1=>{
//     console.log(data1.toString());
// }
// );
// });
// });
var counter=0;
var result=["","",""];

for(let i=2;i<5;i++){
 {   
     
 http.get(process.argv[i],function(response){
    
    response.on('data',(data)=>{
            result[(i-2)]+=data.toString();
    });
    response.on('end',((data)=>{
     counter++;
     siddu();
    }));
 });
}(i);

}




// http.get(process.argv[3],function(response){
//      response.on('data',(data)=>{
// result[1]+=data.toString();
//     });
//     response.on('end',data=>{
//      counter++;
//      siddu();
//     });
// });

// http.get(process.argv[4],function(response){
//     response.on('data',(data)=>{
// result[2]+=data.toString();
//     });
//     response.on('end',data=>{
//  counter++;
//  siddu();
//     });
// });

function siddu(){
if(counter==3){
 for(var i=0;i<3;i++)
 console.log(result[i]);   
}
}
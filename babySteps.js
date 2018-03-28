// function babySteps()
// {
// console.log(process.argv[2]+process.argv[3]);
// }
// console.log(babySteps());
let sum=0;
for(let i=2;i<process.argv.length;i++)
sum=sum+Number(process.argv[i]);
console.log(sum);
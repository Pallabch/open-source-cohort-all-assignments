var fs = require('fs');

fs.readFile('a.txt','utf-8',(err,data) =>{
    console.log(data);
})
var sum = 0
for(var i=0;i<10000000000;i++)
{
    sum += i;
}
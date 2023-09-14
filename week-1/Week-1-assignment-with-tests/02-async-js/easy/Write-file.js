const fs = require('fs');

const text = "I've written inside the file now"

fs.writeFile('a.txt',text,(err)=>{
    if(err){
        console.error(err);
    }
});
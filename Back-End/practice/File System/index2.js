var fs = require('fs');

fs.readFile('abcd.txt',{encoding:"utf8"},function(err,data){
    if (err) {
        console.log(err);  
    }
    else{
        console.log(data)
    }
})
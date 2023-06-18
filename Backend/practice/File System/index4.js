var fs = require('fs');

fs.appendFileSync('abcd.txt','Hey bro',function(err,data){
    if (err) {
        console.log(err);  
    }
    else{
        console.log(data)
    }
})
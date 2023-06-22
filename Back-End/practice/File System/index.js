const fs = require('node:fs');

fs.writeFile('abcd.txt','hello dost to dosto ',function(err){
    if (err) {
        console.log(err);  

    }
    else{
        console.log("File ban gai hai check kar lo bhai!")
    }
})

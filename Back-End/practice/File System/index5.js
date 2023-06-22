var fs = require('fs');

fs.readdir('Raaj',function(err,file){
    if (err) {
        console.log(err);  
    }
    else{
        console.log(file)
    }
})
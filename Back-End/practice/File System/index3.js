var fs = require('fs');

fs.unlink('abcd.txt', function(err) {
    if (err){
        console.log(err);
    }
    else{
        console.log('successfully deleted abcd.txt');
    }
  });
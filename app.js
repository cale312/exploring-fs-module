const fs = require('fs');

// sync style
// var readMe = fs.readFileSync('./readme.txt', 'utf8');
//
// var newReadMe = fs.readFileSync('./newReadme.txt', 'utf8');

// using callbacks
fs.readFile('./readme.txt', 'utf8', function(err, data) {
    fs.writeFile('./writeme.txt', data);
});

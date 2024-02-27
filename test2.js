//syncronous or blocking - line by line execution (pahile lihaleli line pahile execute honar)
// asyncronous or non-blocking -line by line execution not garuntee(ethe ganrantee nahi)(call backs will fire)

const fs = require('fs');
fs.readFile('read.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

console.log("this is message");


const fs = require('fs');

  let data = fs.readFileSync('read.txt', 'utf8');
  data=data.replace('mi','the');
  console.log(data);

  console.log('new file created');
  fs.writeFileSync('akhilesh.txt', data);



const fs = require('fs')

fs.readFile('./test.txt','utf8', (err, data) => {
    if (err) throw err;
    let array = data.toString().split(/ |\n/g);
    let arr = array.filter(n => { return n.search(/ |\—/) != 0 ? n : ""  })
    console.log(arr);
  });
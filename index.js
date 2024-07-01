const fs = require('node:fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });

const content = 'Some content!';
fs.appendFile('file.txt', content, err => {
    if (err) {
        console.error(err);
    } else {
        // file written successfully
    }
});

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
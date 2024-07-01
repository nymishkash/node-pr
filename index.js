const fs = require('node:fs');
const path = require("path");
const http = require("http");

// fs.writeFileSync('file.txt', 'Hello, Node.js', err => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log('file written successfully');
//         // file written successfully
//     }
// });

// fs.readFileSync('file.txt', 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log(data);
//   });

// const content = ' Some content!';
// fs.appendFileSync('file.txt', content, err => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log('file written successfully');
//         // file written successfully
//     }
// });

// fs.readFileSync('file.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

// fs.rmdirSync('new-folder', { recursive: true }, (err) => {
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log('directory removed successfully');
//   }
// });


// fs.mkdir('new-folder', (err) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log('directory created successfully');
//         // directory created successfully
//     }
// });

// fs.rename('new-folder', 'newer-folder', (err) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log('file renamed successfully');
//         // file moved successfully
//     }
// });

// const p = '/home/nymish/dev-class/node-pr/index.js';
// console.log(path.dirname(p)); // 'newer-folder'
// console.log(path.extname(p)); 

// fs.copyFile('index.js', 'newer-folder/index.js', (err) => {
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log('file copied successfully');
//   }
// });


const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  if (req.url === '/login') {
    res.write('<html> <head> <title> js class </title> </head> <body> <h1> Hello, login </h1> </body> </html>')
  }
  else {
    res.write('<html> <head> <title> js class </title> </head> <body> <h1> Hello, Node.js </h1> </body> </html>');
  }
  res.end();
})

const port = 3000;
const host = 'localhost';

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
})


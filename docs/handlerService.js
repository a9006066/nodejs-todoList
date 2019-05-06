var fs = require('fs');


//讀檔
function readFile(response) {
   fs.readFile('file/result.json', (err, data) => {
      if (err) {
         response.writeHead(200, { 'Content-Type': 'text/plain' });
         response.end("error");
      } else {
         response.writeHead(200, { 'Content-Type': 'application/json;charset:"utf-8"' });
         response.end(data.toString());
      }
      console.log();
   })
}

//寫檔
function writeFile(filename, data) {
   console.log('call writeFile' )
   fs.writeFile('text.txt', '說你好', (err) => {
      if (err)
         console.log(err);
      else
         console.log('Write operation complete.');
   });
}


function showMessage(response) {
   response.writeHead(200, { 'Conten-Type': 'text/plain' });
   response.end("Hell0 World");
}


exports.showMessage = showMessage;
exports.readFile = readFile;
exports.writeFile = writeFile;
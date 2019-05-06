
// var url = require('url');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8888;
app.use(bodyParser.urlencoded({extended: true}));


//get function
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/send', (req, res) => {
  var name = req.body.name;
  var age = req.body.age;
  res.send('name:' + name + '<br>' + 'age=' + age);
});


//post function
app.post('/', (req, res) => {
  res.send('Got a put request at/user');
});

app.post('/send', (req, res) => {

  var name = req.body.name;
  var age = req.body.age;
  res.send('name:' + name + '<br>' + 'age:' + age);
});











app.listen(port, () => {
  console.log('Example app listening on port ${port}!');
});









// function start(router,handRouter) {
//     http.createServer((req, res) => {
//         var pathName = url.parse(req.url).pathname;
//         console.log('url is' + pathName);
//         router(req,res, pathName, handRouter);
//     }).listen(8888);
//     console.log('server start');
// }
// }
// exports.start = start;




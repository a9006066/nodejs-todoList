var router = require('./routerService');
var handler = require('./handlerService');
var server = require('./server');


var handRouter = {};

handRouter['/start'] = handler.showMessage;
handRouter['/readFile'] = handler.readFile;
handRouter['/writeFile'] = handler.writeFile;

server.start(router.router,handRouter);
var http = require('http');

var accessCount = 0;

var server = http.createServer(function(request, response){
	console.log("got a request! this is nr:" + accessCount);
	response.write('hi web server!');



	response.write(' <img src"6.jpg">');


	console.log(response);

	/*

_consuming: true,
   _httpMessage: [Circular] },
_header: 'HTTP/1.1 200 OK\r\nDate: Thu, 25 Aug 2016 23:22:23 GMT\r\nConnection: keep-alive\r\nTransfer-Encoding: chunked\r\n\r\n',
_headers: null,
_headerNames: {},
_onPendingData: [Function: updateOutgoingData],
statusMessage: 'OK',
statusCode: 200 }

	*/


	accessCount ++;

	response.end();
});

server.listen(3000);
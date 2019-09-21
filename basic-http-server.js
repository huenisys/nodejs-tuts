#!/usr/bin/env node

var http = require('http');

function serve(ip, port)
{
	http.createServer(function (req, res) {
		res.writeHead(200, {'Content-type': 'text/plain'});
		res.write("Secrets:\n");
		res.write(process.env.SECRET1+"\n");
		res.write(process.env.SECRET2+"\n");
		res.end("You've seen me from: "+ip+':'+port+"\n");
	}).listen(port, ip);

	console.log('Serving from: http://'+ip+':'+port);
}

serve('0.0.0.0', 9000);

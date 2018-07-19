const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000; 
const PATH = {"A":"/a","B":"/b","C":"/c"};
const server = http.createServer((req, res) => {
  	var path = (url.parse(req.url)).path;
  		//console.log(path);
  	switch(path){
  		case PATH.A:
  			a(req,res);
  		break;
  		case PATH.B:
  			b(req,res);
  		break;
  		case PATH.C:
  			c(req,res);
  		break;
  		default:
  		http404(req,res);
  	}
  
  	res.end('Hello World\n');
});

function a(req,res){
	http200(req,res);
	res.end('<h1>this is a page</h1>');
}

function b(req,res){
	http200(req,res);
	res.end('<h1>this is b page</h1>')
}

function c(req,res){
	http200(req,res);
	res.end("this is c page");
}


function http200(req,res){
	res.statusCode = 200;
 	res.setHeader('Content-Type', 'text/html');
 }

function http404(req,res){
 	res.statusCode = 404;
 	res.setHeader('Content-Type', 'text/plain');
 	res.end('this page is not found!');

}


server.listen(port, hostname, () => {
  	console.log(`Server running at http://${hostname}:${port}/`);
});

const express = require('express');
const http= require('http');
const morgan= require('morgan');
const hostname="localhost";
const port=3000;
const app=express();
app.use(morgan('dev'));
app.use((req,res,next) =>{
	console.log(req.headers);
	res.statusCode=200;
	res.setHeader('COntent-Type', 'text/hntml');
	res.end('<html><body>hgvgfc ghh</body></html>');

});
const server= http.createServer(app);
server.listen(port, hostname, ()=>{
	console.log('server running');
	
});
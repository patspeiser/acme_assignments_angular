const http = require('http');
const server = http.createServer(require('./app'));
const port = process.env.PORT || 3000;
const _db = require('./db').db;

if (process.env.SYNC){
	_db.sync({force: true})
		.then(function(){
			console.log('synced database')
		})
		.catch(function(err){
			console.log(err);
		})
}


server.listen(port, function(){
	console.log('listening... ' + port);
});
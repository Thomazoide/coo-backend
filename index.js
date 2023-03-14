const connectDB = require('./db')
const app = require('./app')
const https = require('https')

// async function main(){
// 	await app.listen(443)
// 	console.log('conectado en el puerto 443')
// }

https
	.createServer(app)
	.listen(5555, () => {
		console.log('Conectado en puerto 5555')
	})


connectDB()


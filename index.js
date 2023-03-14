const connectDB = require('./db')
const app = require('./app')
const https = require('https')
const fs = require('fs')

// async function main(){
// 	await app.listen(443)
// 	console.log('conectado en el puerto 443')
// }

const httpsServer = https.createServer(
	{
		key: fs.readFileSync(path.join(_dirname, "./", "aws-coo-fm-00.pem")),
		cert: fs.readFileSync(path.join(_dirname, "./", "cert.pem")),
	},
	app
)

httpsServer.listen(5555, ()=>{console.log('Conectado en puerto 5555')})

connectDB()


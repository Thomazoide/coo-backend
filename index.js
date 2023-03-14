const connectDB = require('./db')
const app = require('./app')

async function main(){
	await app.listen(443)
	console.log('conectado en el puerto 443')
}

connectDB()
main()

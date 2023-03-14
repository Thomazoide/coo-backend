const connectDB = require('./db')
const app = require('./app')

async function main(){
	await app.listen(5555)
	console.log('conectado en el puerto 5555')
}

connectDB()
main()

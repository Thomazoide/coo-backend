const connectDB = require('./db')
const app = require('./app')

async function main(){
	await app.listen(3435)
	console.log('conectado en el puerto 3435')
}

connectDB()
main()

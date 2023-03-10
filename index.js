const connectDB = require('./db')
const app = require('./app')

async function main(){
	await app.listen()
}

connectDB()
main()
const connectDB = require('./db')
const app = require('./app')

async function main(){
	await app.listen(4444)
}

connectDB()
main()

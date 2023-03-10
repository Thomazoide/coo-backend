const {connect} = require('mongoose')


async function connectDB(){
	try{
		await connect("mongodb+srv://thomastellerias:Thom1232!@coo-cluster.x0tclba.mongodb.net/coo-db")
		console.log('conectado a bd')
	}catch(err){
		console.log('error...', err)
	}
}

module.exports = connectDB
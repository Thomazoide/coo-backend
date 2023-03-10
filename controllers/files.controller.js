const file = require('./../models/files')

const fileCtrl = {}

fileCtrl.getfile = async (req, res) => {
	const files = await file.find()
	res.json(files)
}

fileCtrl.savefile = async (req, res) => {
	const {fileName, sheets} = req.body
	const newFile = new file({fileName: fileName, sheets: sheets})
	try{
		await newFile.save()
		res.json({msg: 'archivo guardado'})
		console.log('archivo guardado')
	}catch(err){
		res.json({error: err})
		console.log('error al guardar...', err)
	}
}

module.exports = fileCtrl
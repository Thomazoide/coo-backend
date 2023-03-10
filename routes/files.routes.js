const {Router} = require('express')
const {getfile, savefile} = require('./../controllers/files.controller')
const router = Router()

router.route('/')
	.get(getfile)
	.post(savefile)

module.exports = router
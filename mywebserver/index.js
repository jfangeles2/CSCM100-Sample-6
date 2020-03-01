const express = require('express')
const app = express()


const router = require('./router')
router(app)

app.listen(3000, () =>{
	console.log('Server started at port 3000')
})
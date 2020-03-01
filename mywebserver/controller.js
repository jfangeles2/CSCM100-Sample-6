const mongoose = require('mongoose')

//this will connect us to the mongoDB Server
mongoose.connect(
	'mongodb://localhost:27017/uv2l',
	{useNewUrlParser: true, useUnifiedTopology: true}
)//uv2l is the name of the database to be used

//creaate a model of a mongo db collection
const Subject = mongoose.model('subjects',{//'Subject' is the name of the collection
	code: String,
	description: String,
	students: Number,
	terminal: Boolean
})

exports.homepage = (req, res) => {
	res.send('Wecome to the Home Page')
}

exports.findAllSubjects = (req, res) => {
	Subject.find({}, (err, subjects) => {
		res.send(subjects)
	})
}
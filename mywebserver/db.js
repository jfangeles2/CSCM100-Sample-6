const mongoose = require('mongoose')

//this will connect us to the mongoDB Server
mongoose.connect(
	'mongodb://localhost:27017/uv2l',
	{useNewUrlParser: true, useUnifiedTopology: true}
)//uv2l is the name of the database to be used

//creaate a model of a mongo db collection
const Subject = mongoose.model('Subject',{//'Subject' is the name of the collection
	code: String,
	description: String,
	students: Number,
	terminal: Boolean
})

//Test

//similar to find. Makes the object in MongoDB into a javascript object
Subject.findOne({code: 'CMSC 100'}, (err, subject) => {
	console.log(subject)
})

//this will return an array of javascript objects
Subject.find({terminal: false}, (err, subject) => {
	console.log(subject)
})

//Add a new subject
const newSubject = new Subject({
	code: 'CMSC 21',
	description: 'Fundamentals of Programming',
	students: 15,
	terminal: true
})
//saving the object in javascript to mongoDB
newSubject.save((err) => {
	if(!err){
		console.log('Saved!')
	}
})

//Update
Subject.findOne({code: 'CMSC 100'}, (err, doc) =>{
	doc.description = 'Web Application Development'
	doc.save()
})

//update a single document and return the raw output
Subject.update(
	{code: 'CMSC 100'},//search criterion
	{description: 'Webby stuff'},//edit to be made
	(err, output) => {
		console.log('Output:')
		console.log(output)
	}
)

//update multiple documents and return the output
Subject.updateMany(
	{terminal: true},//search criterion
	{students: 50},//edit to be made
	(err, result) => {
		console.log('Result:')
		console.log(result)
	}
)

//delete a document
Subject.deleteOne({code: 'CMSC 100'}, (err) => {
		console.log(err)
})

Subject.deleteMany(
	{terminal: true},
	(err) => {
		console.log(err)
	}
)



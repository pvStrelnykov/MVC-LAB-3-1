const http = require('http')
const student = require('./student')

const PORT = 3000

http.createServer().listen(PORT, () => {
	console.log(`Server is running on ${PORT}`)
	console.log(`My name is ${student.getStudentFullName()}. My student ID is ${student.getStudentId()}`)
})
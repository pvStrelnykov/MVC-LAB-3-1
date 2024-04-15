const http = require('http')
const student = require('./student')

const PORT = 3000

const app = http.createServer((req, res) => {
	res.setHeader('Content-Type', 'text/html')
	res.write(`
		<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>About student</title>
			</head>
			<body>
				<h1>${`My name is ${student.getStudentFullName(1)}. My student ID is ${student.getStudentId(2)}`}</h1>
			</body>
		</html>
	`)
	res.end()
})

app.listen(PORT, () => {
	console.log(`Server is running on ${PORT}`)
})
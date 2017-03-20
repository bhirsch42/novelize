const express = require('express');
const fs = require('fs');

const app = express();

// Allow CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "X-Requested-With")
  next()
})

app.get('/res/story', (req, res) => {
	console.log('GET /story')
	fs.readFile('./storage/story.json', (err, data) => {
		res.send(data.toString())
	});
});



app.listen(3000, () => {
	console.log('Novelize server listening on port 3000');;
});
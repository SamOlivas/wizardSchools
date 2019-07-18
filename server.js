const express = require('express');
const cors = require('cors');
const path = require('path')
const {syncAndSeed, models} = require('./db')
syncAndSeed()

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//BEGIN ROUTES//
app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})
//SCHOOLS
app.get('/schools', async (req,res,next) => {
  const data = await models.Schools.findAll()
  res.send(data)
})
//STUDENTS

console.log(`Listening on port:${PORT}`)
app.listen(PORT)

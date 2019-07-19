const express = require('express');
const cors = require('cors');
const path = require('path')
//const {model, syncAndSeed} = require('./models/index')


const app = express();
const PORT = process.env.PORT || 3000;

//MIDDLEWRE//
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//BEGIN ROUTES//
// app.get('/', (req, res, next) => {
//   res.sendFile(path.join(__dirname, './static/index.html'))
// })

// app.get('/schools', async (req,res,next) => {
//   const data = await model.Schools.findAll()
//   res.send(data)
// })

// app.get('/students', async (req,res,next) => {
//   const data = await model.Students.findAll()
//   res.send(data)
// })

console.log(`Listening on port:${PORT}`)
app.listen(PORT)

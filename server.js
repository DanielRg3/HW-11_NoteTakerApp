var express = require('express')
var path = require('path')
const fs = require('fs')
var app = express()
const PORT = 3000;

app.use(express.urlencoded({extended: false}))

app.use(express.json())

app.use(express.static("public"))

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname,'./public/notes.html'))
})

app.get('/api/notes', (req, res) => {
    try {
        const data = fs.readFileSync(path.join(__dirname,'./db/db.json'), 'utf8')
        res.json(JSON.parse(data))
      } catch (err) {
        console.error(err)
      }
})

app.post('/api/notes', (req, res) => {
    try {
        const data = fs.writeFileSync(path.join(__dirname,'./db/db.json'), content)
    }
    catch (err) {
        console.log(err)
    }
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'./public/index.html'))
})

app.listen(PORT, () => 
    console.log(`App listening for requests on port ${PORT}!`)
);
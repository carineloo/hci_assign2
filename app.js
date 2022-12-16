// imports
const express = require('express')
const expressLayouts = require('express-ejs-layouts')


const app = express()
const port =  process.env.PORT || 8000

// Static Files
app.use(express.static('public'))
app.use('/img', express.static(__dirname + '/img'))
app.use('/js', express.static(__dirname + '/js'))

// Set Views | Templating Engine
app.use(expressLayouts)
app.set('layout', './pages/_landing');
app.set('view engine', 'ejs')

// Navigation | Route
app.get('', (req, res) => {
  res.render('landing', { title: 'Fault Report'})
})


// Listen on port 8000
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));

// npm start
// if "Error: Cannot find module 'express'" appears, do 
// npm install express

const express = require('express')
const path = require('path')

const appName = 'Renforts'
const appDescription = 'Mise à disposition d\'agents pour aider au contact tracing Covid'
const appRepo = 'https://github.com/betagouv/renforts'
const port = process.env.PORT || 8080

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use('/static', express.static('static'))
// Hack for importing css from npm package
app.use('/~', express.static(path.join(__dirname, 'node_modules')))
// Populate some variables for all views
app.use(function(req, res, next){
  res.locals.appName = appName
  res.locals.appDescription = appDescription
  res.locals.appRepo = appRepo
  next()
})

app.get('/', (req, res) => {
  res.render('landing')
})

module.exports = app.listen(port, () => {
  console.log(`${appName} listening at http://localhost:${port}`)
})
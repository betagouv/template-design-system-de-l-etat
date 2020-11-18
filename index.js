const express = require('express')
const path = require('path')

const appName = 'Renforts'
const port = 8080 // todo scalingo needs this in vars or something ?

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Populate some variables for all views
app.use(function(req, res, next){
  res.locals.appName = appName
  next()
})

app.get('/', (req, res) => {
  res.render('landing')
})

module.exports = app.listen(8080, () => {
  console.log(`appName listening at http://localhost:${port}`)
})
const express = require('express')
const path = require('path')

const appName = 'Un site avec le Design System de l\'Etat - v0.3.1'
const appDescription = 'N\'hésitez pas à copier ce site pour votre produit, c\'est fait pour!'
const appRepo = 'https://github.com/betagouv/template-design-system-de-l-etat'
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

app.get('/mentions-legales', (req, res) => {
  res.render('legalNotice', {
    contactEmail: 'mon-produit@beta.gouv.fr',
  })
})

module.exports = app.listen(port, () => {
  console.log(`${appName} listening at http://localhost:${port}`)
})
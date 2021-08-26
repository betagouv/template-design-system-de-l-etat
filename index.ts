import express from 'express'
import * as path from 'path'
const designSystemVersion = 'test'//require('./package-lock.json').dependencies['@gouvfr/dsfr'].version
const appName = `Démo du Design System de l\'Etat - version ${designSystemVersion}`
const appDescription = "Un site pour tester le Design System de l'État et s'inspirer."
const appRepo = 'https://github.com/betagouv/template-design-system-de-l-etat'
const port = process.env.PORT || 8080
const app = express()
// app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'tsx');
app.engine('tsx', require('express-react-views').createEngine());

// app.set('views', path.join(__dirname, '../views')); // the code is running in directory "dist".

app.use('/static', express.static('static'))
// Hack for importing css from npm package
app.use('/~', express.static(path.join(__dirname, 'node_modules')))
// Populate some variables for all views
app.use(function(req, res, next){
  res.locals.appName = appName
  res.locals.appDescription = appDescription
  res.locals.appRepo = appRepo
  res.locals.page = req.url
  next()
})

app.get('/', (req, res) => {
  res.render('landing')
})

app.get('/ressources', (req, res) => {
  res.render('ressources', {
    pageTitle: 'Ressources'
  })
})

app.get('/formulaire', (req, res) => {
  res.render('form', {
    pageTitle: 'Formulaire'
  })
})

app.get('/contact', (req, res) => {
  res.render('contact', {
    pageTitle: 'Contact'
  })
})

app.get('/accessibilite', (req, res) => {
  res.render('accessibilite', {
    pageTitle: 'Accessibilité'
  })
})

app.get('/components', (req, res) => {
  res.render('components', {
    pageTitle: 'Composants'
  })
})

app.get('/colors', (req, res) => {
  res.render('colors', {
    pageTitle: 'Couleurs'
  })
})

app.get('/typography', (req, res) => {
  res.render('typography', {
    pageTitle: 'Typographie'
  })
})


app.get('/mentions-legales', (req, res) => {
  res.render('legalNotice', { name: 'John' });
})

module.exports = app.listen(port, () => {
  console.log(`${appName} listening at http://localhost:${port}`)
})
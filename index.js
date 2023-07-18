const express = require('express')
const path = require('path')

const designSystemVersion = require('./package-lock.json').dependencies['@gouvfr/dsfr'].version
const appName = `Démo du Design System de l\'État - version ${designSystemVersion}`
const appDescription = "Ressources autour Design System de l'État."
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
  res.locals.page = req.url
  res.locals.prefix = "fr"
  res.locals.namespace = "dsfr"
  res.locals.organisation = "@gouvfr"
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
  res.render('legalNotice', {
    pageTitle: "Mentions légales",
    contactEmail: 'mon-produit@beta.gouv.fr',
  })
})

module.exports = app.listen(port, () => {
  console.log(`${appName} listening at http://localhost:${port}`)
})


component_path = function(component_name) {
  return "../node_modules/@gouvfr/dsfr/src/component/"+component_name+"/template/ejs/"+component_name+".ejs";
}

group_component_path = function(component_name) {
  return "../node_modules/@gouvfr/dsfr/src/component/"+component_name+"/template/ejs/"+component_name+"s-group.ejs";
}
import * as React from 'react'
import Header from './header'

interface LayoutPageProps {
  pageTitle: string,
  children: any,
  appName: string,
  appDescription: string 
}

export default (props: LayoutPageProps) => {
    return (
    <html lang="fr" data-fr-theme>
    <head>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
      <title>
        { props.pageTitle }
      </title>
      <link rel="stylesheet" href="/~/@gouvfr/dsfr/dist/css/dsfr.css"/>
      <link rel="stylesheet" href="/static/css/custom.css"/>
      <link rel="apple-touch-icon" href="/~/@gouvfr/dsfr/dist/favicons/apple-touch-icon.png"/>
      <link rel="icon" href="/~/@gouvfr/dsfr/dist/favicons/favicon.svg" type="image/svg+xml"/>
      <link rel="shortcut icon" href="/~/@gouvfr/dsfr/dist/favicons/favicon.ico" type="image/x-icon"/>
    </head>
    <body>
      <div class="fr-skiplinks">
        <nav class="fr-container" role="navigation" aria-label="Accès rapide">
            <ul class="fr-skiplinks__list">
                <li>
                    <a class="fr-nav__link" href="#contenu">Contenu</a>
                </li>
                <li>
                    <a class="fr-nav__link" href="#header-navigation">Menu</a>
                </li>
                <li>
                    <a class="fr-nav__link" href="#header-search">Recherche</a>
                </li>
                <li>
                    <a class="fr-nav__link" href="#footer">Pied de page</a>
                </li>
            </ul>
        </nav>
    </div>
    <Header appName={props.appName} appDescription={props.appDescription}></Header>
    {props.children}
    </body>
    </html>
    )
    
}
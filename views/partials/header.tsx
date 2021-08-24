import * as React from 'react'

interface HeaderProps {
    appName: string,
    appDescription: string
}

export default (props: HeaderProps) => {
    return (    <header role="banner" class="fr-header">
    <div class="fr-header__body">
      <div class="fr-container">
        <div class="fr-header__body-row">
          <div class="fr-header__brand fr-enlarge-link">
            <div class="fr-header__brand-top">
              <div class="fr-header__logo">
                <p class="fr-logo">
                  République
                  <br/>Française
                </p>
              </div>
              <div class="fr-header__navbar">
                <button class="fr-btn--menu fr-btn" data-fr-opened="false" aria-controls="modal-menu" aria-haspopup="menu" title="Menu">
                  Menu
                </button>
              </div>
            </div>
            <div class="fr-header__service">
              <a href="/" title="Accueil - <%= appName %>">
                <p class="fr-header__service-title">{props.appName}</p>
              </a>
              <p class="fr-header__service-tagline">{props.appDescription}</p>
            </div>
          </div>
  
          <div class="fr-header__tools">
            <div class="fr-header__tools-links">
              <ul class="fr-links-group">
                <li>
                  <a class="fr-link fr-fi-external-link-line fr-link--icon-right" href="https://gouvfr.atlassian.net/wiki/spaces/DB/" title="documentation officielle - nouvelle fenêtre" target="_blank" rel="noopener">Documentation officielle</a>
                </li>
                <li>
                  <button class="fr-link fr-fi-sun-fill-line fr-link--icon-left" aria-controls="fr-theme-modal" data-fr-opened="false">Paramètres d'affichage</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  {/* <!-- TODO : fix arria-labellby --> */}
    <div class="fr-header__menu fr-modal" id="modal-menu" aria-labelledby="button-825">
      <div class="fr-container">
        <button class="fr-link--close fr-link" aria-controls="modal-menu">Fermer</button>
        <div class="fr-header__menu-links">
        </div>
  
        <nav class="fr-nav" role="navigation" aria-label="Menu principal" id="header-navigation">
          <ul class="fr-nav__list">
            <li class="fr-nav__item">
              <a class="fr-nav__link" href="/" target="_self"></a>
            </li>
            <li class="fr-nav__item">
              <a class="fr-nav__link" href="/components" target="_self"></a>
            </li>
            <li class="fr-nav__item">
              <a class="fr-nav__link" href="/formulaire" target="_self"></a>
            </li>
            <li class="fr-nav__item">
              <a class="fr-nav__link" href="/typography" target="_self"></a>
            </li>
            <li class="fr-nav__item">
              <button class="fr-nav__btn" aria-expanded="false" aria-controls="fr-nav-colors"></button>
              <div class="fr-menu fr-collapse" id="fr-nav-colors">
                <ul class="fr-menu__list">
                  <li><a class="fr-nav__link" href="/colors" target="_self">Palette de couleur</a></li>
                  <li><a class="fr-nav__link" href="/colors#combinaisons" target="_self">Combinaisons accessibles</a></li>
                  <li><a class="fr-nav__link" href="/colors#variables" target="_self">Palette de couleur</a></li>
               </ul>
              </div>
            </li>
            <li class="fr-nav__item">
              <a class="fr-nav__link" href="/ressources" target="_self"></a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>)
}
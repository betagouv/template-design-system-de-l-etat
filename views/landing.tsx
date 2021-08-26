import * as React from 'react'
import Layout from './partials/layout'

interface LandingPageProps {
    appName: string,
    appDescription: string,
    appRepo: string,
    _locals:  {
        title: string,
        description: string
    }
}

function HelloMessage({ appName, appDescription, _locals: { title } }: LandingPageProps) {
  return <Layout
    pageTitle={title || appName}
    appName={appName}
    appDescription={appDescription}>
    <main role="main" id="contenu">
      <div class="fr-container fr-py-6w fr-px-2w">
      <h1>Démo du Design System de l'État</h1>
      <p>
        Ce site est un effort bénévole pour proposer une démo au design system de l'Etat. Il n'est pas maintenu par le SIG : pas de garantie qu'il soit complet, ni parfait !
      </p>

    <div className="fr-container-fluid fr-my-6w">
      <div className="fr-grid-row fr-grid-row--gutters">
      </div>
    </div>

      <div className="fr-container-fluid">
        <h2>Vous voulez participer ? </h2>
        <ul>
          <li><a className="fr-link fr-fi-external-link-line fr-link--icon-right" target="blank" href="https://github.com/betagouv/template-design-system-de-l-etat/issues">Voir les problèmes signalés</a></li>
          <li><a className="fr-link fr-fi-external-link-line fr-link--icon-right" target="blank" href="https://github.com/betagouv/template-design-system-de-l-etat/issues/new">Signaler un problème</a></li>
          <li><a className="fr-link fr-fi-external-link-line fr-link--icon-right" target="blank" href="https://github.com/betagouv/template-design-system-de-l-etat/">Contribuer au code source</a></li>
        </ul>
      </div>
    </div>
    </main>
  </Layout>;
}
export default HelloMessage;
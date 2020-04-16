import React from 'react'
import ReactDOM from 'react-dom'
import { ConnectedRouter } from 'connected-react-router'
import { Router } from '@components/router'
import { Provider } from 'react-redux'
import { configureStore, history } from '@lib/configure-store'

const store = configureStore({})
const rootElement = document.getElementById('app')

const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router />
    </ConnectedRouter>
  </Provider>
)

const hydrateEntireTree = (Component: any) => {
  ReactDOM.hydrate(<Component />, rootElement)
}

if (history) history.listen(() => hydrateEntireTree(Root))
if (typeof document !== 'undefined') hydrateEntireTree(Root)

if ((module as any).hot) {
  (module as any).hot.accept()
}
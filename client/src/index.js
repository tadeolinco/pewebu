import PouchDB from 'pouchdb'
import PouchDBFind from 'pouchdb-find'
import React from 'react'
import ReactDOM from 'react-dom'
import 'typeface-roboto'
import App from './App'
import { DBProvider } from './context/DBContext'
import ProvidersWrapper from './context/ProvidersWrapper'
import './index.css'
import { unregister } from './registerServiceWorker'

PouchDB.plugin(PouchDBFind)

const providers = [DBProvider]

ReactDOM.render(
  <ProvidersWrapper providers={providers}>
    <App />
  </ProvidersWrapper>,
  document.getElementById('root')
)
// registerServiceWorker();

unregister()

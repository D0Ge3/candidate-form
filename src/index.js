import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import './index.scss'
import { CandidateForm } from './components/CandidateForm/CandidateForm'

ReactDOM.render(
  <React.StrictMode>
    <CandidateForm />
  </React.StrictMode>,
  document.getElementById('root')
)

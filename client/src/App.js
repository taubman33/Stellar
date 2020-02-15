import React from 'react'
import { withRouter } from 'react-router-dom'
import Main from './components/Main'


function App() {
  return (
    <div className="app">
      <Main />
    </div>
  )
}

export default withRouter(App)

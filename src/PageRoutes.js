import React from 'react'
import { BrowserRouter,Switch, Route } from 'react-router-dom'
import Main from './pages/UIS/Main'

const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/main" component={Main} exact/>
      </Switch>
    </BrowserRouter>
  )
}

export default PageRoutes

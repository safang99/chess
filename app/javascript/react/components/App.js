import React from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom"

import LocalBoardContainer from "./LocalBoardContainer"

export const App = (props) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/local" component={LocalBoardContainer}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App

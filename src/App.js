import React from 'react';
import './App.scss';

import { Route, Switch } from "react-router-dom";

// import IndexPage from "./pages/index-page/index-page.component";
import IndexSimplePage from "./pages/index-simple-page/index-simple-page.component";
import Index2Page from "./pages/index2-page/index2-page.component";

function App() {
  return (
    <Switch>
      <Route exact path="/zaochka15">
        <IndexSimplePage></IndexSimplePage>   
      </Route>
      <Route exact path="/zaochka15/two">
        <Index2Page></Index2Page>
      </Route>      
    </Switch>
    // <IndexPage></IndexPage>
  
  );
}

export default App;

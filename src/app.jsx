import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styles from './app.module.css';
import Login from './component/login/login';
import Maker from './component/maker/maker';

function App({ FileInput, authService, CardRepository }) {
  return (
    <div class={styles.app}>
     <BrowserRouter>
      <Switch>
        <Route exact path="/">
         <Login authService={authService} />
        </Route>
        <Route path="/maker">
          <Maker 
          FileInput={FileInput} 
          authService={authService} 
          CardRepository={CardRepository}
          />
        </Route>
      </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;

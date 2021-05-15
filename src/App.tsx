import React from 'react';
import { Route, Switch, BrowserRouter, } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from  './Pages/Home'
import SingleIssue from './Pages/SingleIssue'

const App:React.FC = () => {
  return (
    
    <main className='main-github'>
      <BrowserRouter>
        <Header />  
        <Switch>
          <Route exact path='/'>
            {Home}
          </Route>
          <Route path='/issue/:id'>
            {SingleIssue}
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
    
  );
};

export default App;

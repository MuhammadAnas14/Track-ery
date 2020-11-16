import React from 'react'
import Home from './Components/Home'
import Layout from './Components/Layout'
import { Route,Switch,BrowserRouter, } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path='/' exact component={Home}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

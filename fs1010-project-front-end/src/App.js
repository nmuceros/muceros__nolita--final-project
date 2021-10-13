import React from 'react'
import './App.css'
import Navigation from './components/shared/Navigation'
import Footer from './components/shared/Footer'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Resume from './components/pages/Resume'
import Portfolio from './components/pages/Portfolio'
import Contact from './components/pages/Contact'
import Login from './components/pages/Login'
import MessageCentre from './components/pages/MessageCentre'
import Admin from './components/pages/Admin'
import PrivateRoute from './components/shared/PrivateRoute'

function App() {
  return (
    <BrowserRouter>
    <Navigation />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/resume" component={Resume} />      
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/login" component={Login} />
      <PrivateRoute path="/messagecentre" > {/* PrivateRoute is a user-defined component */}
        <MessageCentre />
      </PrivateRoute>
      <PrivateRoute path="/admin" > {/* PrivateRoute is a user-defined component */}
        <Admin />
      </PrivateRoute>      

      {/* <PrivateRoute path="/admin" component={Admin} /> PrivateRoute is a user-defined component */}
    </Switch>
    <Footer />  
</BrowserRouter>
  )
}

export default App;

import React from 'react'
import './App.css'
import Navigation from './components/shared/Navigation'
import Footer from './components/shared/footer'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Resume from './components/pages/Resume'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Login from './components/pages/Login'
import Listing from './components/pages/Listing'
import PrivateRoute from './components/shared/PrivateRoute'

function App() {
  return (
   <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/resume" component={Resume} />
          {/* <Route exact path="/" component={Portfolio} /> */}
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute path="/submissions"> {/* PrivateRoute is a user-defined component */}
          <Route exact path="/about" component={About} />
            <Listing />
          </PrivateRoute>
        </Switch>
        <Footer />  
    </BrowserRouter>
  )
}

export default App;

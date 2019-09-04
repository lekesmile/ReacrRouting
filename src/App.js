import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './routes/home'
import Contact from './routes/contact'
import Users from './routes/users'
import Signup from './routes/signup'
import Login from './routes/login'
import Notfound from './routes/notfound'
import { Route,  Switch } from 'react-router-dom'



function App() {
  return (
    <div className="App">
     
      
     <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route component={Notfound} />
      </Switch>
     
     
      <Footer />
     
    </div>
  );
}

export default App;

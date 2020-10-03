import React,{useState} from 'react';
import './App.css';
import Navbar from './components/Navabar'
import NameCard from './components/NameCard'
import CardDetails from './components/CardDetails'
import IpoList from './components/IpoList'
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  Redirect
} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css"
import { render } from '@testing-library/react';
import PageNotFound from './components/PageNotFound'



function App() {

  
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">

      <Navbar />
      <div className="bodycontent">
      <Switch>
     
        <Route exact path="/" component={IpoList} />
        <Route exact path="/:id" component={CardDetails} />
      </Switch>
      </div>
      </div>
    </Router>
  );
}

export default App;
{/* <NameCard
            name="Mazgoan Dock"
            price="₹135 to ₹145 "
            date="Sep 29, 2020 - Oct 1, 2020"
            img="https://lh3.googleusercontent.com/proxy/ByWsT-KeNpKc4UmKZTzUuMF7AsWm5grY5DyBrr-HEmphVzUMQKuV9lIVOSsvRt1IR7eeX7OlNGdyVj6i2x3shn4ee1Z1YKwDmQJ9arOT7xxRO-f4H8IDOimeyOVhIcq7FEX_nszZyiLtWXxi5F9h6Hh5ObGlmJ3VSY_4Fv4WBwlYdT3p0sFkpnOpMce6ZDLV0SAzYuc=w377-h390"
          />
          <NameCard
            name="Mazgoan Dock"
            price="₹135 to ₹145 "
            date="Sep 29, 2020 - Oct 1, 2020"
            img="https://lh3.googleusercontent.com/proxy/ByWsT-KeNpKc4UmKZTzUuMF7AsWm5grY5DyBrr-HEmphVzUMQKuV9lIVOSsvRt1IR7eeX7OlNGdyVj6i2x3shn4ee1Z1YKwDmQJ9arOT7xxRO-f4H8IDOimeyOVhIcq7FEX_nszZyiLtWXxi5F9h6Hh5ObGlmJ3VSY_4Fv4WBwlYdT3p0sFkpnOpMce6ZDLV0SAzYuc=w377-h390"
          /> */}
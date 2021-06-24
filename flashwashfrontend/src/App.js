import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Login from './Pages/Login'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Products from './Pages/Products'
import Contact from './Pages/Contact'


function App() {
  return (
    <>
    <Router>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/services" component={Services}/>
          <Route exact path="/products" component={Products}/>
          <Route exact path="/contact" component={Contact}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;

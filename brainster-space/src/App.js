import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/sections/Navbar';
import Footer from './components/sections/Footer';
import HomePage from './components/central_pages/HomePage';
import AcadamiesPage from './components/central_pages/AcadamiesPage';
import EventSpacePage from './components/central_pages/EventSpacePage';
import Events from './components/central_pages/Events';
import { IoArrowUpOutline } from 'react-icons/io5';

import React, { PureComponent } from 'react'

class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }
  toTop = () => {
    window.scrollTo(0,0);
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          
          <Switch>
            
            <Route exact path="/" component={HomePage}/>
            <Route path="/akademii" component={AcadamiesPage}/>
            <Route path="/prostor_za_nastani" component={EventSpacePage}/>
            <Route path="/nastani" component={Events}/>
            
          </Switch>
          <div className=" backToTop d-flex justify-content-center align-items-center" onClick={this.toTop}><IoArrowUpOutline /> </div>
          <Footer/>
        </Router>
      </div>
    );
  }
}



export default App;

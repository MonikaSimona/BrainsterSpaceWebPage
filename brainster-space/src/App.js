import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AcadamiesPage from './components/AcadamiesPage';
import EventSpacePage from './components/EventSpacePage';
import Events from './components/Events';

function App() {
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
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

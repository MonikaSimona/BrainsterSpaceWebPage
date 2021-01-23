import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AcadamiesPage from './components/AcadamiesPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        
        <Switch>
        
          <Route exact path="/" component={HomePage}/>
          <Route path="/akademii" component={AcadamiesPage}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

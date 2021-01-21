import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        
        <Switch>
          <Route path="/" component={HomePage}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

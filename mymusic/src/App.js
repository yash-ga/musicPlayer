
import './App.css';
import {Route,Switch} from "react-router-dom"
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Login } from './components/Login';

function App() {
  return (
    <div className="App">
      <h1>music</h1>
      <Navbar/>
      <Switch>
      <Route exact path="/"><Home/></Route>
      <Route exact path="/login"><Login/></Route>
      </Switch>
      
      
    </div>
  );
}

export default App;

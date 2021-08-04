import './App.css';
import { Route, Switch } from 'react-router-dom';
import Registration from './pages/Registration';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Registration} />
      </Switch>
    </div>
  );
}

export default App;

import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/home.component';
import ButtonsDisplayPage from './pages/buttons-display/buttons-display.component';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={ HomePage }/>
        <Route path="/buttons" component={ ButtonsDisplayPage }/>
        <Route path="*">No match :(</Route>
      </Switch>
    </div>
  );
}

export default App;

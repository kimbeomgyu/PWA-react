import React from 'react';
import './App.scss';
import AppShell from './AppShell';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';
import Notification from './components/Notification';

function App() {
  return (
    <Router>
      <AppShell className="App">
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/notification" component={Notification} />
        </div>
      </AppShell>
    </Router>
  );
}

export default App;

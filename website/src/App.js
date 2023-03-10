import './App.css';
import React, { useState } from 'react';
import ReactDOM from "react-dom";
import LoginPage from './components/Login/LoginPage';
import HomePage from './components/Home/HomePage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  /*const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };*/

  return (
    /*<Router>
      <Route path="/" exact>
        {isLoggedIn ? <HomePage handleLogout={handleLogout} /> : <LoginPage handleLogin={handleLogin} />}
      </Route>
      <Route path="/home">
        {isLoggedIn ? <HomePage handleLogout={handleLogout} /> : <LoginPage handleLogin={handleLogin} />}
      </Route>
    </Router>*/
    ReactDOM.render(<LoginPage />, document.getElementById("root"))
  );
}

export default App;

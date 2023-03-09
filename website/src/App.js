import logo from './logo.svg';
import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import LoginPage from "./components/Login/LoginPage";

function App() {
  return (
    ReactDOM.render(<LoginPage />, document.getElementById("root"))
  );
}

export default App;

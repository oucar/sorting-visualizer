import React from "react";
import "./App.css";
import Navigation from "./components/navigation/Navigation";
import Main from "./components/main/Main";

const App = () => {
  return (
      <div className="App">
        <Navigation />
        <Main />
      </div>
  );
};

export default App;

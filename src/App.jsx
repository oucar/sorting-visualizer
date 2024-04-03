import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import "./App.css";
import Navigation from "./components/navigation/Navigation";
import Main from "./components/main/Main";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Navigation />
        <Main />
      </div>
    </Provider>
  );
};

export default App;

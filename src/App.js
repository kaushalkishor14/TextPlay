import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// let name = <b>"Kaushal"</b>;
function App() {
  const [mode, setMode] = useState("light"); // wheather dark mode is enable or not
  const [alert, setAlert] = useState(null); // alert ko object bnna rhe hai set slet method jo alerts set kr degaa

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1C1C1C ";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Router>
        {/* <Navbar title="TextUtils" /> */}
        <Navbar
          title="TextPlay"
          aboutText="About "
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        {/*   // basicly props pass kr rhe hai */}
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>

            <Route exact path="/">
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to play"
                mode={mode}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

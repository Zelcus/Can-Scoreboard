import React from "react";
import logo from "./logo.svg";
import "./App.css";

import CanOpener from "./CanOpener";
import SignUp from "./signUpForm";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p></p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                ></a>
                {SignUp()}
                {CanOpener()}
            </header>
        </div>
    );
}

export default App;

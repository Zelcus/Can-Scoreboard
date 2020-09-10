import React, { useState, useEffect } from "react";
import "./App.scss";

import DaysToSpooktober from "./daysToSpooktober";
import ScoreBoard from "./scoreBoard";

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
                {DaysToSpooktober()}
                <h2>Coca Cola Counter Dashboard</h2>
                {ScoreBoard()}
            </header>
        </div>
    );
}

export default App;

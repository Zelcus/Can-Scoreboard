import React, { useState, useEffect } from "react";
import "./App.scss";

import DaysToSpooktober from "./daysToSpooktober";
import ScoreBoard from "./scoreBoard";

function App() {
    return (
        <div className="dashboard">
            <header className="dashboard-header"> </header>
            <div className="dashboard-body">
                <p></p>

                {DaysToSpooktober()}
                <h2>Coca Cola Counter Dashboard</h2>
                {ScoreBoard()}
            </div>
        </div>
    );
}

export default App;
